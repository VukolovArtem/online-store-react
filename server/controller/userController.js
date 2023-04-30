const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");
//const { where } = require("sequelize");

const generateJwt = (id, email, role) => {
   return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
      expiresIn: "24h",
   });
};

class UserController {
   async registration(req, res, next) {
      const { email, password, role } = req.body;
      if (!email || !password) {
         return next(ApiError.bedRequest("Wrong email or password!"));
      }
      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
         return next(ApiError.bedRequest("User is authorized"));
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role, password: hashPassword });
      const basket = await Basket.create({ userId: user.id });
      const token = generateJwt(user.id, user.email, user.role);
      return res.json({ token });
   }

   async login(req, res, next) {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
         return next(ApiError.bedRequest("User is not found"));
      }
      let comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
         return next(ApiError.bedRequest("Wrong Password!"));
      }
      const token = generateJwt(user.id, user.email, user.role);
      return res.json({ token });
   }

   async check(req, res, next) {
      const { id } = req.query;
      if (!id) {
         return next(ApiError.bedRequest("No ID"));
      }
      res.json(id);
   }
}

module.exports = new UserController();

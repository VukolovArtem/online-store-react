require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const fileUpLoad = require("express-fileupload");
const router = require("./routes/index");

const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpLoad({}));
app.use("/api", router);

//Обработка ошибок последний мидлвейр
app.use(errorHandler);

const start = async () => {
   try {
      await sequelize.authenticate();
      await sequelize.sync();
      app.listen(PORT, () => console.log(`Server OK ${PORT}`));
   } catch (error) {
      console.log(error);
   }
};

start();

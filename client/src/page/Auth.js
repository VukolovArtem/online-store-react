import React, { useState, useContext } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
   const { user } = useContext(Context);
   const location = useLocation();
   const history = useHistory();
   const isLogin = location.pathname === LOGIN_ROUTE;
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const click = async () => {
      try {
         let data;
         if (isLogin) {
            data = await login(email, password);
         } else {
            data = await registration(email, password);
         }
         user.setUser(user);
         user.setIsAuth(true);
         history.push(SHOP_ROUTE);
      } catch (error) {
         alert(error.response.data.message);
      }
   };

   return (
      <Container
         className="d-flex justify-content-center align-items-center"
         style={{ height: window.innerHeight - 54 }}
      >
         <Card style={{ width: 600 }} className="p-4">
            <h2 className="m-auto"> {isLogin ? "Login" : "Authorization"}</h2>
            <Form className="d-flax flex-column">
               <Form.Control
                  className="mt-3"
                  placeholder="imput email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <Form.Control
                  className="mt-3"
                  placeholder="imput password..."
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
               />

               <Row>
                  {isLogin ? (
                     <div className="mt-3 ">
                        Нету аккаунта
                        <NavLink to={REGISTRATION_ROUTE}>зарегестрироваться</NavLink>
                     </div>
                  ) : (
                     <div>
                        Есть аккаунт <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                     </div>
                  )}
                  <Button
                     className="mt-3 align-sel-end"
                     variant={"outline-success"}
                     onClick={click}
                  >
                     {isLogin ? "Войти" : "зарегестрироваться"}
                  </Button>
               </Row>
            </Form>
         </Card>
      </Container>
   );
});

export default Auth;

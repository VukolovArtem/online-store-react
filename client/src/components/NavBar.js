import React, { useContext } from "react";
import { Context } from "../index";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
   const { user } = useContext(Context);
   const history = useHistory();

   const logOut = () => {
      user.setUser({});
      user.setIsAuth(false);
   };

   return (
      <Navbar bg="dark" variant="dark">
         <Container>
            <NavLink to={SHOP_ROUTE}>MAGAZ</NavLink>
            {user.isAuth ? (
               <Nav className="ml-auto" style={{ color: "white" }}>
                  <Button
                     variant={"outline-light"}
                     onClick={() => history.push(ADMIN_ROUTE)}
                     className="ml-4"
                     s
                  >
                     Admin panel
                  </Button>
                  <Button
                     variant={"outline-light"}
                     onClick={() => logOut()}
                     className="ml-2"
                  >
                     EXIT
                  </Button>
               </Nav>
            ) : (
               <Nav className="ml-auto">
                  <Button
                     variant={"outline-light"}
                     onClick={() => history.push(LOGIN_ROUTE)}
                  >
                     Autorization
                  </Button>
               </Nav>
            )}
         </Container>
      </Navbar>
   );
});

export default NavBar;

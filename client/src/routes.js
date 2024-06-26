import {
   ADMIN_ROUTE,
   DEVICE_ROUTE,
   REGISTRATION_ROUTE,
   SHOP_ROUTE,
   LOGIN_ROUTE,
   BASKET_ROUTE,
} from "./utils/consts.js";

import Admin from "./page/Admin";
import Auth from "./page/Auth";
import Basket from "./page/Basket";
import DevicePage from "./page/DevicePage";
import Shop from "./page/Shop";

export const authRoutes = [
   {
      path: ADMIN_ROUTE,
      Component: Admin,
   },
   {
      path: BASKET_ROUTE,
      Component: Basket,
   },
];

export const publicRoutes = [
   {
      path: SHOP_ROUTE,
      Component: Shop,
   },
   {
      path: LOGIN_ROUTE,
      Component: Auth,
   },
   {
      path: REGISTRATION_ROUTE,
      Component: Auth,
   },
   {
      path: DEVICE_ROUTE + "/:id",
      Component: DevicePage,
   },
];

import { routes } from "../constants/routes";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Service from "../pages/Service/Service";

export const publicRoutes = [
  { path: routes.HOME, page: <Home /> },
  { path: routes.SERVICE, page: <Service /> },
];

export const privateRoutes = [{ path: routes.CONTACT, page: <Contact /> }];


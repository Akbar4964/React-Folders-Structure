import React from "react";
import { privateRoutes, publicRoutes } from "../routes";
import { Route, Routes } from "react-router-dom";

function NavRoutes() {
  const userData = { token: "", isLogged: false };

  return (
    <Routes>
      {userData.isLogged && userData.token
        ? privateRoutes.map((el) => <Route path={el.path} element={el.page} />)
        : publicRoutes.map((el) => <Route path={el.path} element={el.page} />)}
    </Routes>
  );
}

export default NavRoutes;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RouteNames, privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const auth = false;
  return auth ? (
    <>
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            path={route.path}
            Component={route.component}
            key={route.path}
          />
        ))}
      </Routes>
      <Navigate to={RouteNames.EVENT} />
    </>
  ) : (
    <>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            path={route.path}
            Component={route.component}
            key={route.path}
          />
        ))}
      </Routes>
      <Navigate to={RouteNames.LOGIN} />
    </>
  );
};

export default AppRouter;

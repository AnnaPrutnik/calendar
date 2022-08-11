import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { RoutesNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { isAuthSelector } from '../store/selectors';

const AppRoutes = () => {
  const isAuth = useTypedSelector(isAuthSelector);

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route
            path={RoutesNames.ANY}
            element={<Navigate to={RoutesNames.EVENT} />}
          />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          ))}
          <Route
            path={RoutesNames.ANY}
            element={<Navigate to={RoutesNames.LOGIN} />}
          />
        </Routes>
      )}
    </>
  );
};

export default AppRoutes;

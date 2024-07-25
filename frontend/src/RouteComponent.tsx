import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegistrationPage/RegisterPage';
import ItemPage from './pages/ItemPage/ItemPage';

const RouteComponent: React.FC = () => {

  const routes = useRoutes([
    {
      path: '/item',
      element: <ItemPage />,
    },
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/signin',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);


  return routes || <Navigate to="/404" />;
};

export default RouteComponent;
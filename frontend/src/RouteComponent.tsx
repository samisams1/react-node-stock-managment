import React from 'react';
import { useRoutes, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegistrationPage/RegisterPage';
import ItemPage from './pages/ItemPage/ItemPage';
import SelectedItemDetails from './pages/ItemPage/SelectedItemDetails';

interface SelectedItem {
  id: string;
  name: string;
  description: string;
  item_code: string;
}

const RouteComponent: React.FC = () => {
  const location = useLocation();
  const { selectedItems } = location.state as { selectedItems: SelectedItem[] } || { selectedItems: [] };

  const routes = useRoutes([
    {
      path: '/items',
      element: <ItemPage />,
    },
    {
      path: '/selected-items',
      element: <SelectedItemDetails selectedItems={selectedItems} />,
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

  // Redirect to the home page if the route doesn't match any of the defined routes
  if (!routes) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return routes;
};

export default RouteComponent;
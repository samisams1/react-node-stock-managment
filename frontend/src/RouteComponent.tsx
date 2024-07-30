import React from 'react';
import { useRoutes, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegistrationPage/RegisterPage';
import ItemPage from './pages/ItemPage/ItemPage';
import SelectedItemDetails from './pages/ItemPage/SelectedItemDetails';
import Bank from './pages/BankPage/bank';
import Branch from './pages/Branch/branch';
import ShopeItem from './pages/ShopePage/shopeItem';
import ItemInput from './pages/ShopePage/itemInput';
import ItemHistory from './pages/ShopePage/itemHistory';
import LowBalance from './pages/ShopePage/lowBalance';
import ItemBalance from './pages/ShopePage/ItemBalance';
import ManageSales from './pages/SalesPage/manageSales';
import SalesReport from './pages/SalesPage/salesReport';
import SalesFiliter from './pages/SalesPage/salesFiliter';
import ManageRequest from './pages/StorePage/manageRequest';
import StoreItem from './pages/StorePage/storetem';
import MainBranch from './pages/StorePage/mainBranch';
import LowInQuantity from './pages/StorePage/lowInQuantity';

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
    {path: '/shope-item',element: <ShopeItem />,},
    {path: '/item-input',element: <ItemInput />,},
    {path: '/item-history',element: <ItemHistory />,},
    {path: '/item-low-quantity',element: <LowBalance />,},
    {path: '/item-balance',element: <ItemBalance />,},

    {path: '/manage-request',element: <ManageRequest />,},
    {path: '/item-out',element: <StoreItem />,},
    {path: '/main-branch',element: <MainBranch />,},
    {path: '/low-quantity',element: <LowInQuantity />,},

    {path: '/manage-sales',element: <ManageSales />,},
    {path: '/sales-report',element: <SalesReport />,},
    {path: '/sales-filiter',element: <SalesFiliter />,},
    {
      path: '/bank',
      element: <Bank />,
    },
    {
      path: '/branch',
      element: <Branch />,
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
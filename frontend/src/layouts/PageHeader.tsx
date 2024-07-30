import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#030E4F',
  secondaryColor: '#b4b9db',
};

const PageHeader = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  span {
    color: #fff;
    margin-left: auto;
    position: relative;
    padding-right: 16px;

    &::after {
      content: '▼';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      font-size: 12px;
      color: #b4b9db;
    }
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 9999;
  }

  span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: #fff;
    margin-bottom: 4px;
    transition: transform 0.3s ease-in-out;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const DrawerContent = styled.div`
  p {
    padding: 8px 0;
    margin: 0;
    color: #fff;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #f2f2f2;
      color: ${(props) => props.theme.secondaryColor};
    }

    &.sub-menu {
      padding-left: 16px;
      font-weight: bold;
      color: #fff;
    }
  }
`;

const Drawer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  padding-top: 40px;
  background-color: ${(props) => props.theme.primaryColor};
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
`;

const SubMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  padding-left: 16px;
`;

interface PageHeaderComponentProps {}

export const PageHeaderComponent: React.FC<PageHeaderComponentProps> = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [openedMenus, setOpenedMenus] = useState<{ [key: string]: boolean }>({
    shop: false,
    store: false,
    sales: false,
  });

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const toggleSubMenu = (menu: string) => {
    setOpenedMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <PageHeader>
        <span onClick={() => toggleSubMenu('shop')}>Shop</span>
        <SubMenu isOpen={openedMenus.shop}>
          <p className="sub-menu">Shop Item</p>
          <p className="sub-menu">Item Input</p>
          <p className="sub-menu">Item History</p>
          <p className="sub-menu">Item Move History</p>
          <p className="sub-menu">Item Balance</p>
          <p className="sub-menu">Item Balance - All Low in Quantity</p>
        </SubMenu>
        <span onClick={() => toggleSubMenu('store')}>Store</span>
        <SubMenu isOpen={openedMenus.store}>
          <p className="sub-menu">Main Branch</p>
          <p className="sub-menu">Request Items</p>
          <p className="sub-menu">Manage Request</p>
          <p className="sub-menu">Low in Quantity</p>
        </SubMenu>
        <span onClick={() => toggleSubMenu('sales')}>Sales</span>
        <SubMenu isOpen={openedMenus.sales}>
          <p className="sub-menu">Item Out</p>
          <p className="sub-menu">Manage Sales</p>
          <p className="sub-menu">Sales Report</p>
          <p className="sub-menu">Sales Filter</p>
        </SubMenu>
        <span>Transfer</span>
        <span>Setting</span>
        <HamburgerMenu onClick={toggleDrawer}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerMenu>
      </PageHeader>
      <Drawer isOpen={isDrawerOpen}>
        <DrawerContent>
          <p>Shop</p>
          <p className="sub-menu">Shop Item</p>
          <p className="sub-menu">Item Input</p>
          <p className="sub-menu">Item History</p>
          <p className="sub-menu">Item Move History</p>
          <p className="sub-menu">Item Balance</p>
          <p className="sub-menu">Item Balance - All Low in Quantity</p>
          <p>Store</p>
          <p className="sub-menu">Main Branch</p>
          <p className="sub-menu">Request Items</p>
          <p className="sub-menu">Manage Request</p>
          <p className="sub-menu">Low in Quantity</p>
          <p>Sales</p>
          <p className="sub-menu">Item Out</p>
          <p className="sub-menu">Manage Sales</p>
          <p className="sub-menu">Sales Report</p>
          <p className="sub-menu">Sales Filter</p>
          <p>Transfer</p>
          <p className="sub-menu">Add Item in Manage Item</p>
          <p className="sub-menu">Item In Report</p>
          <p className="sub-menu">Add Item Out</p>
          <p className="sub-menu">Manage Item Out</p>
          <p className="sub-menu">Item Out Report</p>
          <p>Setting</p>
        </DrawerContent>
      </Drawer>
    </ThemeProvider>
  );
};
import React, { useState } from 'react';  
import styled from 'styled-components';  
import { useNavigate } from 'react-router-dom';  
import {  
  FaHome, FaShoppingCart, FaStore, FaExchangeAlt, FaClipboardList, FaMoneyBillAlt, FaCog,  
  FaAngleUp, FaAngleDown, FaUserCircle, FaShippingFast, FaChartLine, FaPeopleArrows,  
  FaCodeBranch, FaFileImport,  
} from 'react-icons/fa';  

interface LinkProps {  
  label: string;  
  href: string;  
  icon: React.ReactNode;  
  subMenu?: LinkProps[];  
}  
const links: LinkProps[] = [  
  { label: 'Dashboard', href: '/', icon: <FaHome />},  
  {  
    label: 'Shop', href: '/shop', icon: <FaShoppingCart />, subMenu: [  
      { label: 'Shop Item', href: '/shope-item', icon: <FaClipboardList /> },  
      { label: 'Item Input', href: '/item-input', icon: <FaUserCircle /> },  
      { label: 'Item History', href: '/item-history', icon: <FaShippingFast /> },  
      { label: 'Item Balance', href: '/item-alance', icon: <FaShippingFast /> },  
      { label: 'Item Balance - All Low in Quantity', href: '/item-low-quantity', icon: <FaShippingFast /> },  
    ],  
  },  
  {  
    label: 'Store', href: '/store', icon: <FaStore />, subMenu: [  
      { label: 'Main Branch', href: '/store/inventory', icon: <FaChartLine /> },  
      { label: 'Request Items', href: '/store/pricing', icon: <FaMoneyBillAlt /> },  
      { label: 'Manage Request', href: '/store/analytics', icon: <FaChartLine /> }, 
      { label: 'Low in Quantity', href: '/store/analytics', icon: <FaChartLine /> },  
    ],  
  },  
  {  
    label: 'Transfer', href: '/transfer', icon: <FaExchangeAlt />, subMenu: [  
      { label: 'Bank Accounts', href: '/transfer/accounts', icon: <FaUserCircle /> },  
      { label: 'Transaction History', href: '/transfer/history', icon: <FaClipboardList /> },  
      { label: 'Transfer Settings', href: '/transfer/settings', icon: <FaCog /> },  
    ],  
  },  
  {  
    label: 'Request', href: '/request', icon: <FaClipboardList />, subMenu: [  
      { label: 'Pending Requests', href: '/request/pending', icon: <FaClipboardList /> },  
      { label: 'Request Templates', href: '/request/templates', icon: <FaCog /> },  
      { label: 'Request Analytics', href: '/request/analytics', icon: <FaChartLine /> },  
    ],  
  },  
  {  
    label: 'Purchase', href: '/purchase', icon: <FaMoneyBillAlt />, subMenu: [  
      { label: 'Purchase Item', href: '/purchase-item', icon: <FaClipboardList /> },  
      { label: 'Purchase Request', href: '/purchase-request', icon: <FaCog /> },  
      { label: 'Purchase Info', href: '/purchase-info', icon: <FaChartLine /> },  
    ],  
  },  
  {  
    label: 'Settings', href: '/settings', icon: <FaCog />, subMenu: [  
      { label: 'Company Profile', href: '/companyProfile', icon: <FaPeopleArrows /> },  
      { label: 'User Management', href: '/users', icon: <FaPeopleArrows /> },  
      { label: 'Branch', href: '/branch', icon: <FaCodeBranch /> },  
      { label: 'Import From Excel', href: '/import', icon: <FaFileImport /> },  
    ],  
  },  
];  

const Navbar: React.FC = () => {  
  const navigate = useNavigate();  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);  

  const handleSubMenuClick = (href: string, index: number) => {  
    navigate(href);  
    setActiveIndex(null); // Close submenu after navigation  
  };  

  const toggleSubMenu = (index: number) => {  
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));  
  };  

  return (  
    <NavbarContainer>  
      <NavList>  
        {links.map((link, index) => (  
          <NavItem key={index}>  
            <NavLink  
              onClick={() => toggleSubMenu(index)}  
              isActive={activeIndex === index}  
            >  
              {link.icon} {link.label}  
              {link.subMenu && (  
                activeIndex === index  
                  ? <FaAngleUp />  
                  : <FaAngleDown />  
              )}  
            </NavLink>  
            {link.subMenu && (  
              <SubMenu isActive={activeIndex === index}>  
                {link.subMenu.map((subLink, subIndex) => (  
                  <SubMenuItem key={subIndex}>  
                    <SubMenuLink  
                      onClick={() => handleSubMenuClick(subLink.href, index)}  
                    >  
                      {subLink.icon} {subLink.label}  
                    </SubMenuLink>  
                  </SubMenuItem>  
                ))}  
              </SubMenu>  
            )}  
          </NavItem>  
        ))}  
      </NavList>  
    </NavbarContainer>  
  );  
};  

const NavbarContainer = styled.nav`  
  display: flex;  
  justify-content: center;  
  background-color: #333;  
  padding: 1rem 0;  
`;  

const NavList = styled.ul`  
  list-style-type: none;  
  margin: 0;  
  padding: 0;  
  display: flex;  
`;  

const NavItem = styled.li`  
  margin: 0 1rem;  
  position: relative;  
`;  

const NavLink = styled.a<{ isActive?: boolean }>`  
  color: ${({ isActive }) => (isActive ? '#ccc' : '#fff')};  
  text-decoration: none;  
  font-weight: bold;  
  cursor: pointer;  
  display: flex;  
  align-items: center;  

  &:hover {  
    color: #ccc;  
  }  

  svg {  
    margin-right: 0.5rem;  
  }  
`;  

const SubMenu = styled.ul<{ isActive?: boolean }>`  
  list-style-type: none;  
  margin: 0;  
  padding: 0.5rem 0;  
  background-color: #444;  
  position: absolute;  
  top: 100%;  
  left: 0;  
  min-width: 200px;  
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};  
  z-index: 1;  
`;  

const SubMenuItem = styled.li`  
  padding: 0.5rem 1rem;  

  &:hover {  
    background-color: #555;  
  }  
`;  

const SubMenuLink = styled.a`  
  color: #fff;  
  text-decoration: none;  
  display: flex;  
  align-items: center;  

  svg {  
    margin-right: 0.5rem;  
  }  
`;  

export default Navbar;
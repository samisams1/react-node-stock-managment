import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import Footer from '../../layouts/Footer/footer';
import Banner from '../HomePage/Banner';
import ItemTable from './Item';
import Button from '../../components/Button/Button';
import { FaPlus, FaShoppingBasket, FaDownload, FaBoxOpen } from 'react-icons/fa';

// Define the theme colors
const theme = {
  primaryColor: '#030E4F', // Golden color
  secondaryColor: '#b4b9db', // Black color
};

const Content = styled.div`
  flex: 1;
  display: flex;
`;

const MainContentWrapper = styled.div`
  flex: 1;
  padding: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ItemPage = () => {
  const handleClick = () => {
    // Add your function logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
      <Content>
        <MainContentWrapper>
      
          <Banner />
          <ButtonContainer>
            <ButtonWrapper>
            <Button onClick={handleClick}>
                <FaPlus /> Add to store
              </Button>
              <Button onClick={handleClick}>
                <FaShoppingBasket /> Add to Purchase order
              </Button>
              <Button onClick={handleClick}>
                <FaDownload /> Export
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button onClick={handleClick}>
                <FaPlus /> New Item
              </Button>
              <Button onClick={handleClick}>
                <FaBoxOpen /> Item Out
              </Button>
            </ButtonWrapper>
          </ButtonContainer>
          <ItemTable />
        </MainContentWrapper>
      </Content>
      <Footer />
    </ThemeProvider>
  );
};

export default ItemPage;
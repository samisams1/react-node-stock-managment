import React from 'react';
import { ThemeProvider } from 'styled-components';
import Banner from '../HomePage/Banner';
import Navbar from '../../layouts/PageHeader';
import Footer from '../../layouts/Footer/footer';
import { Content,MainContentWrapper,theme } from '../../components/common/CommonComponents';

const SalesFiliter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Content>
        <MainContentWrapper>
          <Banner />
        </MainContentWrapper>
      </Content>
      <Footer />
    </ThemeProvider>
  );
};

export default SalesFiliter;
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import SearchComponent from '../../layouts/Search/Search';
import SidebarComponent from '../../layouts/Sidebar';
import Footer from '../../layouts/Footer/footer';
import Banner from '../HomePage/Banner';
import Cabinet from '../../layouts/LeftSide/Cabinet';
import ImportantInfo from '../../layouts/LeftSide/importnamtInfo';
import LoginFormNew from './LoginFormNew';

// Define the theme colors
const theme = {
  primaryColor: '#030E4F', // Golden color
  secondaryColor: '#b4b9db', // Black color
};

const Content = styled.div`
  flex: 1;
  display: flex;
`;
const SubMainWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 20px;
`;
const MainContentWrapper = styled.div`
  flex: 1;
  padding: 16px;
`;
const LeftColumn = styled.div`
  flex: 0.8;
  background-color: #ffffff;
  overflow-x: auto;
`;

const RightColumn = styled.div`
  flex: 0.2;
`;

const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
    <Content>
      <SidebarComponent/>
        <MainContentWrapper>
          <SearchComponent />
          <Banner />
          <SubMainWrapper>
          <LeftColumn>
      <LoginFormNew/>
      </LeftColumn>
      <RightColumn>
        <Cabinet/>
        <ImportantInfo/>
      </RightColumn>
      </SubMainWrapper>
        </MainContentWrapper>
    </Content>
      <Footer/>
    </ThemeProvider>
  );
};

export default LoginPage;
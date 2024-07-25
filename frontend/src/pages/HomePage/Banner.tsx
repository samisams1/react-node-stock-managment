import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  background-color: #b4b9db;
`;
const Header = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding-bottom: 10px;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <Header>
        <h1>Nile Source Software Solution Stock Managment System</h1>
      </Header>
      {/* Rest of the banner content */}
    </BannerWrapper>
  );
};

export default Banner;
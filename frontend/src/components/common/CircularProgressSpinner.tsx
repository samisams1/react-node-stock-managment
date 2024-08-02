import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 4px solid #4CAF50;
  border-top-color: transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${rotateAnimation} 1s linear infinite;
`;

const CircularProgressSpinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default CircularProgressSpinner;
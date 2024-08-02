import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FlashMessageContainer = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => (props.type === 'success' ? '#4CAF50' : '#F44336')};
  color: white;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

interface FlashMessageProps {
  message: string;
  type: 'success' | 'error';
  duration?: number; // in milliseconds
}

const FlashMessage: React.FC<FlashMessageProps> = ({ message, type, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <FlashMessageContainer type={type}>
      {message}
      <CloseButton onClick={handleClose}>×</CloseButton>
    </FlashMessageContainer>
  );
};

export default FlashMessage;
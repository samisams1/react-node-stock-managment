import React, { FC, useState, useEffect, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';


export interface InputProps {
  label: string;
  //value: string;
  type?: 'text' |'number'| 'select';
  options?: string[];
}

interface UnitSelectProps {
  selectedUnit: string;
  onUnitChange: (unit: string) => void;
}
interface StatusSelectProps {
  selectedUnit: string;
  onUnitChange: (unit: string) => void;
}

interface ModalProps {
  title: string;
  inputs: InputProps[];
  content: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (data: Record<string, string>) => void;
  UnitSelect?: React.ReactElement<UnitSelectProps>;
  StatusSelect?: React.ReactElement<StatusSelectProps>;
}

const Modal: FC<ModalProps> = ({
  title,
  inputs,
  content,
  isVisible,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      window.addEventListener('keydown', handleKeydown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isVisible, onClose]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          {content}
          <FormContainer>
            {inputs.map((input, index) => (
              <InputContainer key={index}>
                <Label>{input.label}</Label>
                {input.type === 'select' ? (
                  <Select name={input.label} onChange={handleInputChange}>
                    <option value="">Select {input.label}</option>
                    {input.options?.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                ) : (
                  <Input
                    type={input.type}
                    name={input.label}
                    onChange={handleInputChange}
                  />
                )}
              </InputContainer>
            ))}
     
          </FormContainer>
        </ModalBody>
        <ModalFooter>
          <SubmitButton onClick={handleSubmit}>Save Changes</SubmitButton>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 90%;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  background-color: #5cb85c;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
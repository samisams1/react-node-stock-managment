import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Banner from '../HomePage/Banner';
import Navbar from '../../layouts/PageHeader';
import Footer from '../../layouts/Footer/footer';
import { Content, MainContentWrapper, theme } from '../../components/common/CommonComponents';
import { ButtonContainer, ButtonWrapper } from '../../components/Button/ButtonStyle';
import Button from '../../components/Button/Button';
import { FaBoxOpen, FaDownload, FaPlus, FaShoppingBasket } from 'react-icons/fa';
import Modal from '../../components/Model/modal';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import FlashMessage from '../../components/common/FlashMessage';

export interface InputProps {
  label: string;
  value: string;
  type?: 'text' | 'select';
  options?: string[];
}

const handleClick = () => {
  // Add your click handler logic here
};

const ShopItem = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputData, setInputData] = useState<Record<string, string>>({});
  const [flashMessage, setFlashMessage] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleUnitChange = (unit: string) => {
   // setSelectedUnit(unit);
  };

  const handleSubmit = async (data: Record<string, string>) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/item/create`, data);
      console.log('Item added successfully:', response.data);
      setInputData({}); // Reset the input data
      handleCloseModal(); // Close the modal
      setFlashMessage({ message: 'Item added successfully', type: 'success' });
    } catch (error) {
      console.error('Error adding item:', error);
      setFlashMessage({ message: 'Error adding item', type: 'error' });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Content>
        <MainContentWrapper>
          <Banner />
          <ButtonContainer>
            <ButtonWrapper>
              <Button onClick={handleOpenModal}>
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
              <Button onClick={handleOpenModal}>
                <FaPlus /> New Item
              </Button>
              <Button onClick={handleClick}>
                <FaBoxOpen /> Item Out
              </Button>
            </ButtonWrapper>
          </ButtonContainer>
        </MainContentWrapper>
        {flashMessage && (
        <FlashMessage message={flashMessage.message} type={flashMessage.type} />
      )}
        <Modal
          title="Add New Item"
          inputs={[
            { label: 'Item Code', type: 'text' },
            { label: 'Item Name', type: 'text' },
            { label: 'Quantity', type: 'number' },
            { label: 'Purchase PRice', type: 'number' },
            { label: 'Selling Price', type: 'number' },
            { label: 'Unit', type: 'select', options: ['kg', 'g', 'lb', 'oz'] },
            { label: 'Sattus', type: 'select', options: ['Active','InActive'] },
          ]}
          content="Please fill in the form to add a new item."
          isVisible={modalVisible}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          UnitSelect={
            <div>
              <button onClick={() => handleUnitChange('kg')}>kg</button>
              <button onClick={() => handleUnitChange('g')}>g</button>
              <button onClick={() => handleUnitChange('lb')}>lb</button>
              <button onClick={() => handleUnitChange('oz')}>oz</button>
            </div>
          }
          StatusSelect={
            <div>
              <button onClick={() => handleUnitChange('Active')}>kg</button>
              <button onClick={() => handleUnitChange('In Active')}>g</button>
            </div>
          }
        />
        <pre>{JSON.stringify(inputData, null, 2)}</pre>
      </Content>
      <Footer />
    </ThemeProvider>
  );
};

export default ShopItem;
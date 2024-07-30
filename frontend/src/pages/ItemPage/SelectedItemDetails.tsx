import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Banner from '../HomePage/Banner';
import { PageHeaderComponent } from '../../layouts/PageHeader';
import Footer from '../../layouts/Footer/footer';
import { AiOutlineDelete } from 'react-icons/ai';

const theme = {
  primaryColor: '#030E4F',
  secondaryColor: '#b4b9db',
};

interface SelectedItem {
  id: string;
  name: string;
  description: string;
  item_code: string;
}

const LeftColumn = styled.div`
  flex-basis: 50%;
  padding: 10px;
`;

const RightColumn = styled.div`
  flex-basis: 50%;
  padding: 10px;
`;
const InputField = styled.input`
  width: 100%;
  margin-bottom: 10px;
`;

interface SelectedItemDetailsProps {
  selectedItems: SelectedItem[];
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedItemDetails: React.FC<SelectedItemDetailsProps> = () => {
  const location = useLocation();
  const { selectedItems } = location.state as { selectedItems: SelectedItem[] };
  const [data, setData] = useState(selectedItems);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [dueAmount, setDueAmount] = useState(0);
  //const [paymentType, setPaymentType] = useState('');
  //const [paymentStatus, setPaymentStatus] = useState('');
  //const [remark, setRemark] = useState('');

  const handleInputChange = (index: number, field: keyof SelectedItem, value: string) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index][field] = value;
      return updatedData;
    });
  };

  const handleCloseItem = (index: number) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleAddRow = () => {
    setData((prevData) => [
      ...prevData,
      { id: '', name: '', description: '', item_code: '' },
    ]);
  };

  const handleSaveChanges = () => {
    // Calculate the totals and update the state
    let newSubTotal = 0;
    data.forEach((item) => {
      newSubTotal += parseFloat(item.id) || 0; // Assuming the ID field represents the price
    });
    setSubTotal(newSubTotal);
    setVat(newSubTotal * 0.1); // Assuming 10% VAT
    setTotalAmount(newSubTotal + vat);
    setGrandTotal(newSubTotal + vat - discount);
    setDueAmount(grandTotal - paidAmount);
  };

  return (
    <ThemeProvider theme={theme}>
      <PageHeaderComponent />
      <Banner />
      {data.length > 0 ? (
        <SelectedItemsContainer>
          <div>
            <label>Sales Date</label>
            <input type="date" />
          </div>
          <div>
            <label>Customer Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Company Name</label>
            <input type="text" />
          </div>
          <h2>Selected Items Details</h2>
          <AddButton onClick={handleAddRow}>Add</AddButton>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Item Code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={item.id}
                      onChange={(e) => handleInputChange(index, 'id', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.item_code}
                      onChange={(e) => handleInputChange(index, 'item_code', e.target.value)}
                    />
                  </td>
                  <td>
                    <AiOutlineDelete onClick={() => handleCloseItem(index)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Container>
          <LeftColumn>
        <label>Sub Total</label>
        <InputField
          type="number"
          value={subTotal}
          onChange={(e) => setSubTotal(parseFloat(e.target.value))}
        />
        <label>VAT</label>
        <InputField
          type="number"
          value={vat}
          onChange={(e) => setVat(parseFloat(e.target.value))}
        />
     
        <label>Total Amount</label>
        <InputField
          type="number"
          value={totalAmount}
          onChange={(e) => setTotalAmount(parseFloat(e.target.value))}
        />
           <label>Discount</label>
        <InputField
          type="number"
          value={discount}
          onChange={(e) => setDiscount(parseFloat(e.target.value))}
        />
        <label>Grand Total</label>
        <InputField
          type="number"
          value={grandTotal}
          onChange={(e) => setGrandTotal(parseFloat(e.target.value))}
        />
      </LeftColumn>
      <RightColumn>
        
        
        <label>Paid Amount</label>
        <InputField
          type="number"
          value={paidAmount}
          onChange={(e) => setPaidAmount(parseFloat(e.target.value))}
        />
        <label>Due Amount</label>
        <InputField
          type="number"
          value={dueAmount}
          onChange={(e) => setDueAmount(parseFloat(e.target.value))}
        />
          <label>Payment Type</label>
        <InputField
          type="number"
          value={dueAmount}
          onChange={(e) => setDueAmount(parseFloat(e.target.value))}
        />
           <label>Payment Status</label>
        <InputField
          type="number"
          value={dueAmount}
          onChange={(e) => setDueAmount(parseFloat(e.target.value))}
        />
         <label>Remark</label>
        <InputField
          type="number"
          value={dueAmount}
          onChange={(e) => setDueAmount(parseFloat(e.target.value))}
        />
      </RightColumn>
      </Container>
          <AddButton onClick={handleSaveChanges}>Save Changes</AddButton>
        </SelectedItemsContainer>
      ) : (
        <p>No selected items</p>
      )}
      <Footer />
    </ThemeProvider>
  );
};

const SelectedItemsContainer = styled.div`
  padding: 1rem;
  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      padding: 0.5rem;
      border-bottom: 1px solid ${(props) => props.theme.secondaryColor};
    }
    input {
      width: 100%;
      padding: 0.25rem;
      border: 1px solid ${(props) => props.theme.secondaryColor};
    }
  }
`;

const AddButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
`;

export default SelectedItemDetails;
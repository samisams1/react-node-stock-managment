import React, { useState, useEffect } from 'react';
import { Item, fetchItems } from '../../redux/actions/itemActions';
import {
  TableWrapper,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableCell,
  ActionCell,
  ActionButton,
  CheckboxCell,
  CheckboxInput,
} from './ItemTableStyles';
import Button from '../../components/Button/Button';
import { FaBoxOpen } from 'react-icons/fa';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

const ItemTable: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  //const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
 // const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(data);
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (item: Item) => {
    if (selectedItems.some((i) => i.id === item.id)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedItems(items);
    } else {
      setSelectedItems([]);
    }
  };

  const handleDeleteClick = (item: Item) => {
    setSelectedItems([item]);
   // setShowDeleteConfirm(true);
  };

  const handleEditClick = (item: Item) => {
    // Add your edit logic here
    console.log('Edit item:', item);
  };

  const handleViewClick = (item: Item) => {
    handleItemSelect(item);
  };

  const handleItemSelect = (item: Item) => {
   // setSelectedItem(item);
  };

  const handleItemOutClick = () => {
    navigate('/selected-items', { state: { selectedItems } });
  };

  return (
    <div>
      <ButtonContainer>
        <ButtonWrapper>
          <Button onClick={handleItemOutClick}>
            <FaBoxOpen /> Item Out
          </Button>
        </ButtonWrapper>
      </ButtonContainer>
      <TableWrapper>
        <TableHeader>
          <tr>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>
              Options{' '}
              <CheckboxInput
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAllChange}
              />
            </TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <tr key={item.id}>
              <TableCell>{item.item_code}</TableCell>
              <TableCell>{item.item_name}</TableCell>
              <ActionCell>
                <ActionButton onClick={() => handleDeleteClick(item)}>🗑️</ActionButton>
                <ActionButton onClick={() => handleEditClick(item)}>✏️</ActionButton>
                <ActionButton onClick={() => handleViewClick(item)}>👁️</ActionButton>
                <CheckboxCell>
                  <CheckboxInput
                    type="checkbox"
                    checked={selectedItems.includes(item)}
                    onChange={() => handleCheckboxChange(item)}
                  />
                </CheckboxCell>
              </ActionCell>
            </tr>
          ))}
        </TableBody>
      </TableWrapper>
    </div>
  );
};

export default ItemTable;
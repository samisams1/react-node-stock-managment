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

const ItemTable: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(data);
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (item: Item) => {
    if (selectedItems.includes(item)) {
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
    setShowDeleteConfirm(true);
  };

  const handleEditClick = (item: Item) => {
    // Add your edit logic here
    console.log('Edit item:', item);
  };

  const handleViewClick = (item: Item) => {
    // Add your view logic here
    console.log('View item:', item);
  };

  return (
    <div>
      search
    <TableWrapper>
      <TableHeader>
        
        <tr>
          <TableHeaderCell>ID</TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Options  <CheckboxInput
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAllChange}
            /></TableHeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <tr key={item.id}>
            <TableCell>{item.item_code}</TableCell>
            <TableCell>{item.item_name}</TableCell>
            <ActionCell>
              <ActionButton onClick={() => handleDeleteClick(item)}>
                🗑️
              </ActionButton>
              <ActionButton onClick={() => handleEditClick(item)}>
                ✏️
              </ActionButton>
              <ActionButton onClick={() => handleViewClick(item)}>
                👁️
              </ActionButton>
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
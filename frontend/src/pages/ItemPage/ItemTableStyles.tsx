import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: 'Arial', sans-serif;
`;

export const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

export const TableHeaderCell = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-weight: bold;
`;

export const TableBody = styled.tbody`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 12px 16px;
  text-align: left;
`;

export const ActionCell = styled(TableCell)`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #007bff;

  &:hover {
    color: #0056b3;
  }
`;
export const CheckboxCell = styled(TableCell)`
  width: 40px;
  text-align: center;
`;

export const CheckboxInput = styled.input`
  cursor: pointer;
`;
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const PaginationButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#007bff' : '#f1f1f1')};
  border: none;
  color: ${({ active }) => (active ? '#fff' : '#333')};
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#e6e6e6')};
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

export const FilterInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

export const SortButton = styled.button`
  background-color: #f1f1f1;
  border: none;
  color: #333;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;
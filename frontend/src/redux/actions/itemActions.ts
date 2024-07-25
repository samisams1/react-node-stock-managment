export interface Item {
  id: string;
  item_code: string;
  item_name: string;
}

export const fetchItems = async (): Promise<Item[]> => {
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000/item/items';
  const response = await fetch(apiUrl);
  const data: Item[] = await response.json();
  return data;
};
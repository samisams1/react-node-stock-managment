
import  Item  from './model';
import ItemRepository from './repositories/repositories';

const ItemService = {
  async getAllItems(): Promise<Item[]> {
    return ItemRepository.getAllItems();
  },
  async createItem(itemData: Partial<Item>): Promise<Item> {
    return ItemRepository.create(itemData);
  },
};

export default ItemService;


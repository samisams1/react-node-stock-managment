import Item from '../model';

const ItemRepository = {
  async getAllItems(): Promise<Item[]> {
    return Item.findAll();
  },
  async create(itemData: Partial<Item>): Promise<Item> {
    return Item.create(itemData);
  }

};

export default ItemRepository;
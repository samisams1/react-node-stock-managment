import GenericService from "../../modules/service/GenericService";
import Store from './model';

class StoreService extends GenericService<Store> {
  constructor() {
    super(Store);
  }
  async create(store: Partial<Store>): Promise<Store> {
    // Add any service-specific validation or business logic here
    if (!store.id) {
      throw new Error('Store name is required');
    }
    return super.create(store);
  }
  async getById(id: number): Promise<Store | null> {
    return super.getById(id);
  }
  async updateStore(id: number, store: Partial<Store>): Promise<Store | null> {
    return super.getById(id);
  }
  async deleteStore(id: number): Promise<boolean> {
    try {
      await super.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
}
export {StoreService}
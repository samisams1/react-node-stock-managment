import { Request, Response } from 'express';
import Store, { StoreAttributes } from './model';
import { StoreService } from './service';

class StoreController {
  private storeService: StoreService;

  constructor() {
    this.storeService = new StoreService();
  }

  async getAllStores(req: Request, res: Response): Promise<void> {
    const stores = await this.storeService.getAll();
    res.json(stores);
  }
  async getStoreById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const store = await this.storeService.getById(Number(id));
    if (!store) {
      res.status(404).json({ message: 'Store not found' });
    } else {
      res.json(store);
    }
  }
  async createStore(req: Request, res: Response): Promise<void> {
    const data: StoreAttributes = req.body;
    const newStore = await this.storeService.create(data);
    res.status(201).json(newStore);
  }

  async updateStore(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data: Partial<Store> = req.body;
    const updatedStore = await this.storeService.updateStore(Number(id), data);
    res.json(updatedStore);
  }

  async deleteStore(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.storeService.deleteStore(Number(id));
    res.status(204).end();
  }
}

export default StoreController;
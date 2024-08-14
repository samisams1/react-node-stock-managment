import { Request, Response } from 'express';
import { QuantityService } from './service';
import Quantity, { QuantityAttributes } from './model';

class QuantityController {
  private quantityService: QuantityService;

  constructor() {
    this.quantityService = new QuantityService();
  }

  async getAllQuantities(req: Request, res: Response): Promise<void> {
    const stores = await this.quantityService.getAll();
    res.json(stores);
  }
  async getStoreById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const store = await this.quantityService.getById(Number(id));
    if (!store) {
      res.status(404).json({ message: 'Store not found' });
    } else {
      res.json(store);
    }
  }
  async createQuantity(req: Request, res: Response): Promise<void> {
    const data: QuantityAttributes = req.body;
    const newStore = await this.quantityService.create(data);
    res.status(201).json(newStore);
  }

  async updateQuantity(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data: Partial<Quantity> = req.body;
    const updatedStore = await this.quantityService.updateQuantity(Number(id), data);
    res.json(updatedStore);
  }

  async deleteQuantity(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.quantityService.deleteQuantity(Number(id));
    res.status(204).end();
  }
}

export default QuantityController;
import { Request, Response } from 'express';
import { UnitService } from './service';
import Unit, { UnitAttributes } from './model';

class UnitController {
  private unitService: UnitService;

  constructor() {
    this.unitService = new UnitService();
  }

  async getAllPurchases(req: Request, res: Response): Promise<void> {
    const branches = await this.unitService.getAll();
    res.json(branches);
  }

  async getPurchaseById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const branch = await this.unitService.getById(Number(id));
    if (!branch) {
      res.status(404).json({ message: 'Branch not found' });
    } else {
      res.json(branch);
    }
  }

  async createPurchase(req: Request, res: Response): Promise<void> {
    const data: UnitAttributes = req.body;
    const newBranch = await this.unitService.create(data);
    res.status(201).json(newBranch);
  }

  async updatePurchase(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data: Partial<Unit> = req.body;
    const updatedBranch = await this.unitService.updateUint(Number(id), data);
    res.json(updatedBranch);
  }

  async deletePurchase(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.unitService.deleteUnit(Number(id));
    res.status(204).end();
  }
}

export default UnitController;
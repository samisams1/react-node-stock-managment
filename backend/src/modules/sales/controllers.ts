import { Request, Response } from 'express';
import { SalesService } from './service';
import Sales, { SalesAttributes } from './mode';

class SalesController {
  private salesService: SalesService;

  constructor() {
    this.salesService = new SalesService();
  }

  async getAllSales(req: Request, res: Response): Promise<void> {
    const branches = await this.salesService.getAll();
    res.json(branches);
  }

  async getSalesById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const branch = await this.salesService.getById(Number(id));
    if (!branch) {
      res.status(404).json({ message: 'Branch not found' });
    } else {
      res.json(branch);
    }
  }

  async createSales(req: Request, res: Response): Promise<void> {
    const data: SalesAttributes = req.body;
    const newBranch = await this.salesService.create(data);
    res.status(201).json(newBranch);
  }

  async updateSales(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data: Partial<Sales> = req.body;
    const updatedBranch = await this.salesService.updateBranch(Number(id), data);
    res.json(updatedBranch);
  }

  async deleteSales(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.salesService.deleteBranch(Number(id));
    res.status(204).end();
  }
}

export default SalesController;
import { Request, Response } from 'express';
import { ShopeService } from './service';
import Shope, { ShopeAttributes } from './model';
class ShopeController {
  private sheoeService: ShopeService;

  constructor() {
    this.sheoeService = new ShopeService();
  }

  async getAllShopes(req: Request, res: Response): Promise<void> {
    const branches = await this.sheoeService.getAll();
    res.json(branches);
  }

  async getShopeById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const branch = await this.sheoeService.getById(Number(id));
    if (!branch) {
      res.status(404).json({ message: 'Branch not found' });
    } else {
      res.json(branch);
    }
  }

  async createShope(req: Request, res: Response): Promise<void> {
    const data: ShopeAttributes = req.body;
    const newBranch = await this.sheoeService.create(data);
    res.status(201).json(newBranch);
  }

  async updateShope(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data: Partial<Shope> = req.body;
    const updatedBranch = await this.sheoeService.update(Number(id), data);
    res.json(updatedBranch);
  }

  async deleteShope(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.sheoeService.delete(Number(id));
    res.status(204).end();
  }
}

export default ShopeController;
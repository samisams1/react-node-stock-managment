import { Request, Response } from 'express';
import { TransferService } from './service';
import Transfer from './model';

class TransferController {
  private transferService: TransferService;

  constructor() {
    this.transferService = new TransferService();
  }

  async getAllTransfer(req: Request, res: Response): Promise<void> {
    const branches = await this.transferService.getAll();
    res.json(branches);
  }

  async getById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const branch = await this.transferService.getById(Number(id));
    if (!branch) {
      res.status(404).json({ message: 'Branch not found' });
    } else {
      res.json(branch);
    }
  }

  async createTransfer(req: Request, res: Response): Promise<void> {
    const data: Transfer = req.body;
    const newBranch = await this.transferService.create(data);
    res.status(201).json(newBranch);
  }

  async updatePurchase(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data: Partial<Transfer> = req.body;
    const updatedBranch = await this.transferService.updatetTransfer(Number(id), data);
    res.json(updatedBranch);
  }

  async deletePurchase(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.transferService.deleteTransfer(Number(id));
    res.status(204).end();
  }
}


export {TransferController};
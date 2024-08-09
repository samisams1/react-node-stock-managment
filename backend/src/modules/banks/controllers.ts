import { Request, Response } from 'express';
import { BankService } from './service';
import Bank, { BankAttributes } from './model';

class BankController {
  private branchService: BankService;

  constructor() {
    this.branchService = new BankService();
  }

  async getAllBanks(req: Request, res: Response): Promise<void> {
    const branches = await this.branchService.getAll();
    res.json(branches);
  }

  async getBankById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const branch = await this.branchService.getById(Number(id));
    if (!branch) {
      res.status(404).json({ message: 'Branch not found' });
    } else {
      res.json(branch);
    }
  }

  async createBank(req: Request, res: Response): Promise<void> {
    const data: BankAttributes = req.body;
    const newBranch = await this.branchService.create(data);
    res.status(201).json(newBranch);
  }

  async updateBank(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data: Partial<Bank> = req.body;
    const updatedBranch = await this.branchService.updateBranch(Number(id), data);
    res.json(updatedBranch);
  }

  async deleteBank(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.branchService.deleteBranch(Number(id));
    res.status(204).end();
  }
}

export default BankController;
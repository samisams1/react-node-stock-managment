/*import { Request, Response } from 'express';
import BranchService from './service';
import Branch from './models';

class BranchController {
  private branchService: BranchService;

  constructor() {
    this.branchService = new BranchService();
  }

  async getAllBranches(req: Request, res: Response): Promise<void> {
    try {
      const branches = await this.branchService.getAllBranches();
      res.status(200).json(branches);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }
  async createBranch(req: Request, res: Response) {
    try {

      const branchData = req.body;
      const newBranch = await this.branchService.createBranch(branchData);
      res.status(201).json(newBranch);
    } catch (error) {
      console.error('Error creating branch:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async updateBranch(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, address, phone, email, status } = req.body;
      const updatedBranch: Partial<Pick<Branch, 'name' | 'address' | 'phone' | 'email' | 'status'>> = {
        name,
        address,
        phone,
        email,
        status,
      };
      const branch = await this.branchService.updateBranch(Number(id), updatedBranch);
      res.status(200).json(branch);
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  }

  async deleteBranch(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await this.branchService.deleteBranch(Number(id));
      res.status(204).json();
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  }
}

export default BranchController;*/
import { Request, Response } from 'express';
import Branch, { BranchAttributes } from './models';
import { BranchService } from './service';

class BranchController {
  private branchService: BranchService;

  constructor() {
    this.branchService = new BranchService();
  }

  async getAllBranches(req: Request, res: Response): Promise<void> {
    const branches = await this.branchService.getAll();
    res.json(branches);
  }

  async getBranchById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const branch = await this.branchService.getById(Number(id));
    if (!branch) {
      res.status(404).json({ message: 'Branch not found' });
    } else {
      res.json(branch);
    }
  }

  async createBranch(req: Request, res: Response): Promise<void> {
    const data: BranchAttributes = req.body;
    const newBranch = await this.branchService.create(data);
    res.status(201).json(newBranch);
  }

  async updateBranch(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data: Partial<Branch> = req.body;
    const updatedBranch = await this.branchService.updateBranch(Number(id), data);
    res.json(updatedBranch);
  }

  async deleteBranch(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.branchService.deleteBranch(Number(id));
    res.status(204).end();
  }
}

export default BranchController;
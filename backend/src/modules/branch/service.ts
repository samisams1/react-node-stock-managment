import GenericService from '../../modules/service/GenericService';
import { Op } from 'sequelize';
import Branch from './models';

class BranchService extends GenericService<Branch> {
  constructor() {
    super(Branch);
  }

  async create(branch: Partial<Branch>): Promise<Branch> {
    // Add any branch-specific validation or business logic here
    if (!branch.name) {
      throw new Error('Branch name is required');
    }

    return super.create(branch);
  }

  async getById(id: number): Promise<Branch | null> {
    return super.getById(id);
  }

  async updateBranch(id: number, branch: Partial<Branch>): Promise<Branch | null> {
    // Add any branch-specific validation or business logic here
    if (!branch.name) {
      throw new Error('Branch name is required');
    }

    const updatedBranch = await super.update(id, branch);
    return updatedBranch;
  }

  async deleteBranch(id: number): Promise<boolean> {
    try {
      await super.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
 
}

export { BranchService };
import GenericService from '../../modules/service/GenericService';
import { Op } from 'sequelize';
import Setting from './model';
class BranchService extends GenericService<Setting> {
  constructor() {
    super(Setting);
  }

  async create(branch: Partial<Setting>): Promise<Setting> {
    // Add any branch-specific validation or business logic here
    if (!branch.id) {
      throw new Error('Branch name is required');
    }

    return super.create(branch);
  }

  async getById(id: number): Promise<Setting | null> {
    return super.getById(id);
  }

  async updateBranch(id: number, branch: Partial<Setting>): Promise<Setting | null> {
    // Add any branch-specific validation or business logic here
    if (!branch.id) {
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
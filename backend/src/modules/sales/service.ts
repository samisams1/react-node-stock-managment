import GenericService from '../../modules/service/GenericService';
import { Sales } from './mode';

class SalesService extends GenericService<Sales> {
  constructor() {
    super(Sales);
  }

  async create(branch: Partial<Sales>): Promise<Sales> {
    // Add any branch-specific validation or business logic here
    if (!branch.id) {
      throw new Error('Branch name is required');
    }

    return super.create(branch);
  }

  async getById(id: number): Promise<Sales | null> {
    return super.getById(id);
  }

  async updateSales(id: number, branch: Partial<Sales>): Promise<Sales | null> {
    // Add any branch-specific validation or business logic here
    if (!branch.id) {
      throw new Error('Branch name is required');
    }

    const updatedBranch = await super.update(id, branch);
    return updatedBranch;
  }

  async deleteSales(id: number): Promise<boolean> {
    try {
      await super.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
 
}

export { SalesService };
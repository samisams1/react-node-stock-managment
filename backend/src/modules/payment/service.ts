import GenericService from '../../modules/service/GenericService';
import { Op } from 'sequelize';
import Payment from './model';

class PaymentService extends GenericService<Payment> {
  constructor() {
    super(Payment);
  }

  async create(branch: Partial<Payment>): Promise<Payment> {
    // Add any branch-specific validation or business logic here
    if (!branch.id) {
      throw new Error('Branch name is required');
    }

    return super.create(branch);
  }

  async getById(id: number): Promise<Payment | null> {
    return super.getById(id);
  }

  async updateBranch(id: number, branch: Partial<Payment>): Promise<Payment | null> {
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

export { PaymentService };
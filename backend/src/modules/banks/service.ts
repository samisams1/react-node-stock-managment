import GenericService from '../../modules/service/GenericService';
import { Op } from 'sequelize';
import Bank from './model';

class BankService extends GenericService<Bank> {
  constructor() {
    super(Bank);
  }

  async create(bank: Partial<Bank>): Promise<Bank> {
    // Add any branch-specific validation or business logic here
    if (!bank.id) {
      throw new Error('Branch name is required');
    }

    return super.create(bank);
  }

  async getById(id: number): Promise<Bank | null> {
    return super.getById(id);
  }

  async updateBranch(id: number, bank: Partial<Bank>): Promise<Bank | null> {
    // Add any branch-specific validation or business logic here
    if (!bank.id) {
      throw new Error('Branch name is required');
    }

    const updatedBranch = await super.update(id, bank);
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

export { BankService };
import GenericService from '../../modules/service/GenericService';
import Unit from './model';

class UnitService extends GenericService<Unit> {
  constructor() {
    super(Unit);
  }

  async create(branch: Partial<Unit>): Promise<Unit> {
    // Add any branch-specific validation or business logic here
    if (!branch.name) {
      throw new Error('Unit name is required');
    }

    return super.create(branch);
  }

  async getById(id: number): Promise<Unit | null> {
    return super.getById(id);
  }

  async updateUint(id: number, branch: Partial<Unit>): Promise<Unit | null> {
    // Add any branch-specific validation or business logic here
    if (!branch.name) {
      throw new Error('Branch name is required');
    }

    const updatedBranch = await super.update(id, branch);
    return updatedBranch;
  }

  async deleteUnit(id: number): Promise<boolean> {
    try {
      await super.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
 
}

export { UnitService };
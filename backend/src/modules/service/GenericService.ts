import GenericRepository from '../../modules/repositories/GenericRepository';
import { Model, ModelStatic, CreationAttributes } from 'sequelize';

class GenericService<
  T extends Model<T, CreationAttributes<T>>
> {
  private repository: GenericRepository<T>;

  constructor(model: ModelStatic<T>) {
    this.repository = new GenericRepository<T>(model);
  }

  async getAll(): Promise<T[]> {
    return this.repository.getAll();
  }

  async getById(id: number): Promise<T | null> {
    return this.repository.getById(id);
  }

  async create(data: CreationAttributes<T>): Promise<T> {
    return this.repository.create(data);
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    return this.repository.updateModel(id, data);
  }

  async delete(id: number): Promise<number> {
    return this.repository.delete(id);
  }
}

export default GenericService;
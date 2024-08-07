import { Model, ModelStatic, CreationAttributes } from 'sequelize';

class GenericRepository<
  T extends Model<T, CreationAttributes<T>>
> {
  private model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async getAll(): Promise<T[]> {
    return this.model.findAll();
  }

  async getById(id: number): Promise<T | null> {
    return this.model.findByPk(id);
  }

  async create(data: CreationAttributes<T>): Promise<T> {
    return this.model.create(data);
  }
  async updateModel(id: number, data: Partial<T>): Promise<T> {
    const model = await this.model.findByPk(id);
    if (!model) {
      throw new Error(`Model with id ${id} not found`);
    }
    await model.save();
    return model;
  }

  async delete(id: number): Promise<number> {
    const model = await this.model.findByPk(id);
    if (!model) {
      throw new Error(`Model with id ${id} not found`);
    }
    await model.destroy();
    return 1; // Return the number of rows affected (1 in this case)
  }
}

export default GenericRepository;
import GenericService from "../../modules/service/GenericService";
import Shope from "./model";

class ShopeService extends GenericService<Shope> {
  constructor() {
    super(Shope)
  }
  async create(shope: Partial<Shope>): Promise<Shope> {
    if(!shope.id){
      throw new Error('Shope is required')
    }
    return super.create(shope);
  }
  async  getById(id: number): Promise<Shope | null> {
    return super.getById(id)
  }
  async  update(id: number, shope: Partial<Shope>): Promise<Shope> {
    if(!shope.id){
      throw new Error ('Shope name is required');
    }
    const updateShope = await super.update(id,shope);
    return updateShope;

  }
  async  deleteShope(id: number): Promise<boolean> {
    try{
      await super.delete(id);
      return true;
    }catch (error) {
      return false
    }
  }
}
export {ShopeService};
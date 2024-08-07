import Shope  from "../model";

const ShopeRepository  = {
    async getAllShope():Promise<Shope[]>{
        return Shope.findAll();
    },
    async create(itemData: Partial<Shope>): Promise<Shope> {
        return Shope.create(itemData);
      }
    
}
export  default ShopeRepository;
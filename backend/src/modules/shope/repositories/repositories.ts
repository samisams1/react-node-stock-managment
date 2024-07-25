import Shope  from "../model";

const ShopeRepository  = {
    async getAllShope():Promise<Shope[]>{
        return Shope.findAll();
    }
}
export  default ShopeRepository;
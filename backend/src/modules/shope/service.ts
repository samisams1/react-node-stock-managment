import Shppe from "./model";
import ShppeRepository from "./repositories/repositories";

const ShopeService = {
  async getAllBanks(): Promise<Shppe[]> {
    return ShppeRepository.getAllShope();
  },

};
export default ShopeService;

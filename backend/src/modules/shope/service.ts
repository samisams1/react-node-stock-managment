import Shope from "./model";
import Shppe from "./model";
import ShppeRepository from "./repositories/repositories";

const ShopeService = {
  async getAllBanks(): Promise<Shppe[]> {
    return ShppeRepository.getAllShope();
  },
  async createShopeItem(itemData: Partial<Shope>): Promise<Shope> {
    return ShppeRepository.create(itemData);
  },
};
export default ShopeService;

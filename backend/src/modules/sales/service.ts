import Sales from "./mode";
import ServiceRepository from "./repositories/repositories";

const SalesService = {
  async getAllBanks(): Promise<Sales[]> {
    return ServiceRepository.getAllSales();
  },
};
export default SalesService;

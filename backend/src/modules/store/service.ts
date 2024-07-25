import Bank from "./model";
import BankRepository from "./repositories/repositories";

const BankService = {
  async getAllBanks(): Promise<Bank[]> {
    return BankRepository.getAllBanks();
  },
  async createBank(itemData: Partial<Bank>): Promise<Bank> {
    return BankRepository.create(itemData);
  },
};
export default BankService;

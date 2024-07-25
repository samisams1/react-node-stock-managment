import Bank from "./model";
import TranferRepository from "./repositories/repositories";

const BankService = {
  async getAllBanks(): Promise<Bank[]> {
    return TranferRepository.getAllTransfer();
  },
 /* async createBank(itemData: Partial<Bank>): Promise<Bank> {
    return TranferRepository.create(itemData);
  },*/
};
export default BankService;

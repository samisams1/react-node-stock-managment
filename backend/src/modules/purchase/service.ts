import Purchase from "./model";
import PurchaseRepository from "./repositories/repositories";

const PurhaseService = {
  async getAllPurchases(): Promise<Purchase[]> {
    return PurchaseRepository.getAllPurchases();
  },
 /* async createBank(itemData: Partial<Bank>): Promise<Purchase> {
    return PurchaseRepository.crete(itemData);
  },*/
};
export default PurhaseService;

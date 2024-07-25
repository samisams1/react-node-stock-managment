import Purchase from "../model"

const PurchaseRepository = {

async getAllPurchases():Promise<Purchase[]> {
    return Purchase.findAll();
},
}
export default PurchaseRepository;
import Bank from "../model"
const BankRepository = {
     async getAllBanks():Promise<Bank[]> {
         return Bank.findAll();
     },
     async create(bankData:Partial<Bank>):Promise<Bank> {
        return Bank.create(bankData);
     }
}
export default BankRepository
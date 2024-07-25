import Payment from "../model"
const PaymentRepositories = {
     async getAllPAymentss():Promise<Payment[]> {
         return Payment.findAll();
     },
     async create(bankData:Partial<Payment>):Promise<Payment> {
        return Payment.create(bankData);
     }
}
export default PaymentRepositories;
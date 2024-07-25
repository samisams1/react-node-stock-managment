import Payment from "./model";
import PaymentRepository from "./repositories/repositories";

const PaymentService = {
  async getAllPayments(): Promise<Payment[]> {
    return PaymentRepository.getAllPAymentss();
  },
  async createPayment(itemData: Partial<Payment>): Promise<Payment> {
    return PaymentRepository.create(itemData);
  },
};
export default PaymentService;

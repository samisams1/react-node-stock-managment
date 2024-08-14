import GenericService from '../../modules/service/GenericService';
import Payment from './model';

class PaymentService extends GenericService<Payment> {
  constructor() {
    super(Payment);
  }

  async create(payment: Partial<Payment>): Promise<Payment> {
    // Add any branch-specific validation or business logic here
    if (!payment.id) {
      throw new Error('Payment name is required');
    }

    return super.create(payment);
  }

  async getById(id: number): Promise<Payment | null> {
    return super.getById(id);
  }

  async updatePayment(id: number, payment: Partial<Payment>): Promise<Payment | null> {
    // Add any branch-specific validation or business logic here
    if (!payment.id) {
      throw new Error('Payment name is required');
    }

    const updatedBranch = await super.update(id, payment);
    return updatedBranch;
  }

  async deletePayment(id: number): Promise<boolean> {
    try {
      await super.delete(id);
      return true;
    } catch (error) {
      return false;
    }
  }
 
}

export { PaymentService };
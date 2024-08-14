import { Request, Response } from 'express';
import { PaymentService } from './service';
import Payment from './model';
export interface PaymentAttributes extends Omit<Payment, "id" | "createdAt" | "updatedAt"> {}
class PaymentController {
  private paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService();
  }

  async getAllPayments(req: Request, res: Response): Promise<void> {
    const branches = await this.paymentService.getAll();
    res.json(branches);
  }

  async getPaymentById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const branch = await this.paymentService.getById(Number(id));
    if (!branch) {
      res.status(404).json({ message: 'Branch not found' });
    } else {
      res.json(branch);
    }
  }

  async createPayment(req: Request, res: Response): Promise<void> {
    const data: PaymentAttributes = req.body;
    const newBranch = await this.paymentService.create(data);
    res.status(201).json(newBranch);
  }

  async updatePayment(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const data: Partial<Payment> = req.body;
    const updatedBranch = await this.paymentService.updatePayment(Number(id), data);
    res.json(updatedBranch);
  }

  async deletePayment(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await this.paymentService.deletePayment(Number(id));
    res.status(204).end();
  }
}

export default PaymentController;
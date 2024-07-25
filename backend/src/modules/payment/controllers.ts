import PaymentService from "./service";
import { Request, Response } from 'express';

const PaymentControlloer  = {
    async getAllPayments(req:Request,res:Response){
        try{
          const   banks = await PaymentService.getAllPayments();
            res.json(banks);
        }catch(error){
            res.status(500).json({error:'Internal server error'});
        }
    },
    async createPayment(req: Request, res: Response): Promise<Response> {
        try {
          const { status } = req.body;
        const bankData = {
            status,
        };
        const createdProduct = await PaymentService.createPayment(bankData);
      return res.status(201).json(createdProduct);
        } catch (error) {
          console.error(error); // Log the error message to the console
        return res.status(500).json({ error: 'Failed to create product' });
        }
      },
}
export default PaymentControlloer;
import BankService from "./service";
import { Request, Response } from 'express';

const BankControlloer  = {
    async getAllBanks(req:Request,res:Response){
        try{
          const   banks = await BankService.getAllBanks();
            res.json(banks);

        }catch(error){
            res.status(500).json({error:'Internal server error'});
        }
    },
    async createProduct(req: Request, res: Response): Promise<Response> {
        try {
          const { title } = req.body;
        const bankData = {
            title,
        };
        const createdProduct = await BankService.createBank(bankData);
      return res.status(201).json(createdProduct);
        } catch (error) {
          console.error(error); // Log the error message to the console
        return res.status(500).json({ error: 'Failed to create product' });
        }
      },
}
export default BankControlloer;
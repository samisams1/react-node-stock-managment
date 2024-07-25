import SettingService from "./service";
import { Request, Response } from 'express';

const SettingControlloer  = {
    async getAllSettings(req:Request,res:Response){
        try{
          const   banks = await SettingService.getAllBanks();
            res.json(banks);

        }catch(error){
            res.status(500).json({error:'Internal server error'});
        }
    },
    async create(req: Request, res: Response): Promise<Response> {
        try {
          const { status } = req.body;
        const bankData = {
            status,
        };
        const createdProduct = await SettingService.createBank(bankData);
      return res.status(201).json(createdProduct);
        } catch (error) {
          console.error(error); // Log the error message to the console
        return res.status(500).json({ error: 'Failed to create product' });
        }
      },
}
export default SettingControlloer;
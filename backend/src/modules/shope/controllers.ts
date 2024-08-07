import ShopeService from "./service";
import { Request, Response } from 'express';
const ShopeController = {
  async getAllSales(req:Request,res:Response){
    try {
      
    } catch (error) {
      
    }
  },
  async createItem(req: Request, res: Response): Promise<Response> {
    try {
      const { item_id } = req.body;
      const itemData = {
      item_id,
    };
    console.log(itemData);
    const createdShopeItem = await ShopeService.createShopeItem(itemData);
  return res.status(201).json(createdShopeItem);
    } catch (error) {
      console.error(error); // Log the error message to the console
    return res.status(500).json({ error: 'Failed to create product' });
    }
  },
}
export default ShopeController;
import { Request, Response } from 'express';

import TransferRepository from "./repositories/repositories";
const TransferController = {
  async getAllItems(req: Request, res: Response) {
    try {
      const products = await TransferRepository.getAllTransfer();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
}
export default TransferController;
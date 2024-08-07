import express from 'express';
import ShopeController from './controllers';
const router = express.Router();
//router.get('/banks', BankControlloer.getAllBanks);

router.post('/create', (req, res) => {
    ShopeController.createItem(req, res);
  });
export default router;

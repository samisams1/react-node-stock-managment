import express from 'express';
import BankControlloer from './controllers';

const router = express.Router();


router.get('/banks', BankControlloer.getAllBanks);

router.post('/create', (req, res) => {BankControlloer});

export default router;

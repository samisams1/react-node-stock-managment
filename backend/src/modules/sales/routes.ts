import express from 'express';
import SalesControlloer from './controllers';

const router = express.Router();


router.get('/banks', SalesControlloer.getAllBanks);

router.post('/create', (req, res) => {SalesControlloer});

export default router;

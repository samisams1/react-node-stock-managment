import express from 'express';
import PaymentControlloer from './controllers';

const router = express.Router();


router.get('/payments', PaymentControlloer.getAllPayments);

router.post('/create', (req, res) => {PaymentControlloer});

export default router;

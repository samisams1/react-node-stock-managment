import express from 'express';
import TransferControlloer from './controllers';

const router = express.Router();


router.get('/transfers', TransferControlloer.getAllTransfers);

router.post('/create', (req, res) => {TransferControlloer});

export default router;

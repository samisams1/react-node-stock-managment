import express, { Router } from 'express';
import { TransferController } from './controllers';

const router: Router = express.Router();
const transferController = new TransferController();

// Get all branches
router.get('/transfers', transferController.getAllTransfer.bind(transferController));

// Get beanch by Id
router.get('/transfer/:id', transferController.getById.bind(transferController));

// Create a new branch
router.post('/transfer', transferController.createTransfer.bind(transferController));

// Update a branch
router.put('/transfer/:id', transferController.updatePurchase.bind(transferController));

// Delete a branch
router.delete('/transfer/:id', transferController.deletePurchase.bind(transferController));

export default router;
import express, { Router } from 'express';
import PurchaseController from './controllers';

const router: Router = express.Router();
const purchaseController = new PurchaseController();

// Get all shopespurchaseController
router.get('/branches', purchaseController.getAllPurchases.bind(purchaseController));

// Get beanch by Id
router.get('/branche/:id', purchaseController.getPurchaseById.bind(purchaseController));

// Create a new shope
router.post('/branches', purchaseController.createPurchase.bind(purchaseController));

// Update a shope
router.put('/branche/:id', purchaseController.updatePurchase.bind(purchaseController));

// Delete a shope
router.delete('/branche/:id', purchaseController.deletePurchase.bind(purchaseController));

export default router;
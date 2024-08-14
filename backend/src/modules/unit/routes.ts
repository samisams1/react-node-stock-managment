import express, { Router } from 'express';
import { UnitService } from './service';
import UnitController from './controller';

const router: Router = express.Router();
const unitController = new UnitController();

// Get all shopespurchaseController
router.get('/units', unitController.getAllPurchases.bind(unitController));

// Get beanch by Id
router.get('/unit/:id', unitController.getPurchaseById.bind(unitController));

// Create a new shope
router.post('/create', unitController.createPurchase.bind(unitController));



// Delete a shope
router.delete('/unit/:id', unitController.deletePurchase.bind(unitController));

export default router;
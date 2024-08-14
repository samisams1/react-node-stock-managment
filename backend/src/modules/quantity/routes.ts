import express, { Router } from 'express';
import QuantityController from './controller';

const router: Router = express.Router();
const quantityController = new QuantityController();

// Get all branches
router.get('/quantities', quantityController.getAllQuantities.bind(quantityController));

// Get beanch by Id
router.get('/quantity/:id', quantityController.getAllQuantities.bind(quantityController));

// Create a new branch
router.post('/create', quantityController.createQuantity.bind(quantityController));

// Update a branch
router.put('/quantity/:id', quantityController.updateQuantity.bind(quantityController));

// Delete a branch
router.delete('/quantity/:id', quantityController.deleteQuantity.bind(quantityController));

export default router;
import express, { Router } from 'express';
import SalesController from './controllers';

const router: Router = express.Router();
const salesController = new SalesController();

// Get all branches
router.get('/saleses', salesController.getAllSales.bind(salesController));

// Get beanch by Id
router.get('/sales/:id', salesController.getSalesById.bind(salesController));

// Create a new branch
router.post('/sales', salesController.createSales.bind(salesController));

// Update a branch
router.put('/sales/:id', salesController.updateSales.bind(salesController));

// Delete a branch
router.delete('/sales/:id', salesController.deleteSales.bind(salesController));

export default router;
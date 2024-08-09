import express, { Router } from 'express';
import BranchController from './controllers';

const router: Router = express.Router();
const branchController = new BranchController();

// Get all branches
router.get('/branches', branchController.getAllSales.bind(branchController));

// Get beanch by Id
router.get('/branche/:id', branchController.getSalesById.bind(branchController));

// Create a new branch
router.post('/branches', branchController.createSales.bind(branchController));

// Update a branch
router.put('/branche/:id', branchController.updateSales.bind(branchController));

// Delete a branch
router.delete('/branche/:id', branchController.deleteSales.bind(branchController));

export default router;
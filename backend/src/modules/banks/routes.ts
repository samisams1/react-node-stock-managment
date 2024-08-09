import express, { Router } from 'express';
import BranchController from './controllers';

const router: Router = express.Router();
const branchController = new BranchController();

// Get all branches
router.get('/branches', branchController.getAllBanks.bind(branchController));

// Get beanch by Id
router.get('/branche/:id', branchController.getBankById.bind(branchController));

// Create a new branch
router.post('/branches', branchController.createBank.bind(branchController));

// Update a branch
router.put('/branche/:id', branchController.updateBank.bind(branchController));

// Delete a branch
router.delete('/branche/:id', branchController.deleteBank.bind(branchController));

export default router;
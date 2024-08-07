import express, { Router } from 'express';
import BranchController from './controllers';

const router: Router = express.Router();
const branchController = new BranchController();

// Get all branches
router.get('/branches', branchController.getAllBranches.bind(branchController));

// Get beanch by Id
router.get('/branche/:id', branchController.getBranchById.bind(branchController));

// Create a new branch
router.post('/branches', branchController.createBranch.bind(branchController));

// Update a branch
router.put('/branche/:id', branchController.updateBranch.bind(branchController));

// Delete a branch
router.delete('/branche/:id', branchController.deleteBranch.bind(branchController));

export default router;
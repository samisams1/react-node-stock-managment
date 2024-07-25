import express from 'express';
import BranchController from './controllers';

const router = express.Router();


router.get('/banks', BranchController.getAllBranches);

router.post('/create', (req, res) => {BranchController});

export default router;

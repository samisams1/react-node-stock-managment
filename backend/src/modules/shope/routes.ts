import express, { Router } from 'express';
import ShopeController from './controllers';

const router: Router = express.Router();
const shopeController = new ShopeController();

// Get all shopes
router.get('/branches', shopeController.getAllShopes.bind(shopeController));

// Get beanch by Id
router.get('/branche/:id', shopeController.getShopeById.bind(shopeController));

// Create a new shope
router.post('/branches', shopeController.createShope.bind(shopeController));

// Update a shope
router.put('/branche/:id', shopeController.createShope.bind(shopeController));

// Delete a shope
router.delete('/branche/:id', shopeController.deleteShope.bind(shopeController));

export default router;
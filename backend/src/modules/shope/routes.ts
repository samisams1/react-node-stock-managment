import express, { Router } from 'express';
import ShopeController from './controllers';

const router: Router = express.Router();
const shopeController = new ShopeController();

// Get all shopes
router.get('/shopes', shopeController.getAllShopes.bind(shopeController));

// Get beanch by Id
router.get('/shope/:id', shopeController.getShopeById.bind(shopeController));

// Create a new shope
router.post('/create', shopeController.createShope.bind(shopeController));

// Update a shope
router.put('/shope/:id', shopeController.createShope.bind(shopeController));

// Delete a shope
router.delete('/shope/:id', shopeController.deleteShope.bind(shopeController));

export default router;
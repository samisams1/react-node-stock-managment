import express, { Router } from 'express';
import StoreController from './controllers';

const router: Router = express.Router();
const storeController = new StoreController();

// Get all branches
router.get('/branches', storeController.getAllStores.bind(storeController));

// Get beanch by Id
router.get('/branche/:id', storeController.getStoreById.bind(storeController));

// Create a new branch
router.post('/branches', storeController.createStore.bind(storeController));

// Update a branch
router.put('/branche/:id', storeController.updateStore.bind(storeController));

// Delete a branch
router.delete('/branche/:id', storeController.deleteStore.bind(storeController));

export default router;
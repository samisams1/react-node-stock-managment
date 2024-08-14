import express, { Router } from 'express';
import PaymentController from './controllers';

const router: Router = express.Router();
const paymentController = new PaymentController();

// Get all payment
router.get('/saleses', paymentController.getAllPayments.bind(paymentController));

// Get payments by Id
router.get('/sales/:id', paymentController.getPaymentById.bind(paymentController));

// Create a new payment
router.post('/sales', paymentController.createPayment.bind(paymentController));

// Update a payment
router.put('/sales/:id', paymentController.updatePayment.bind(paymentController));

// Delete a payment
router.delete('/sales/:id', paymentController.deletePayment.bind(paymentController));

export default router;
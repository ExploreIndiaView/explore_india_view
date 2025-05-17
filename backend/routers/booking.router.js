import express from 'express';
import { bookTourWithoutPayment, createTour, getBookings, getBookingsForAdmin, verifyPayment } from '../controllers/booking.controller.js';
import ProtectRoute, { requireAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();
router.post('/create-tour', ProtectRoute, createTour);
router.post('/verify-payment', ProtectRoute, verifyPayment);
router.post('/create-tour-without-payment', ProtectRoute, bookTourWithoutPayment);
router.get('/get-bookings', ProtectRoute, getBookings);
router.get('/get-bookings-admin', ProtectRoute, requireAdmin, getBookingsForAdmin);

export default router;
import express from 'express';
import ProtectRoute, { requireAdmin } from '../middleware/auth.middleware.js';
import { bookFlight, bookHotel, bookTrain, getBookingDetails, getFlightBookingsforAdmin, getHotelBookingsforAdmin, getTrainBookingsforAdmin } from '../controllers/alternateBoking.controller.js';

const router = express.Router();
router.get('/get-booking-details', ProtectRoute, getBookingDetails); //booking details for perticular users
router.post('/train', ProtectRoute, bookTrain); // book train
router.post("/hotel", ProtectRoute, bookHotel); // book hotel
router.post('/flight', ProtectRoute, bookFlight); // book flight
router.get("/get-train-bookings-admin", ProtectRoute, requireAdmin, getTrainBookingsforAdmin); // get all train bookings
router.get("/get-hotel-bookings-admin", ProtectRoute, requireAdmin, getHotelBookingsforAdmin); // get all hotel bookings
router.get("/get-flight-bookings-admin", ProtectRoute, requireAdmin, getFlightBookingsforAdmin); // get all flight bookings

export default router;
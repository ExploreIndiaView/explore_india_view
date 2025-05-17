import express from 'express';
import { checkAdmin, checkAuth, resendOTP, signIn, signUp, verifyOTP } from '../controllers/auth.controller.js';
import ProtectRoute , {requireAdmin} from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/login', signIn)
router.post('/register', signUp)
router.put('/verify-account', verifyOTP);
router.post('/resend-otp', resendOTP);
router.get('/check-auth', ProtectRoute, checkAuth);
router.get('/check-admin', ProtectRoute, requireAdmin, checkAdmin);


export default router;
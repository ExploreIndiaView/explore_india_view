import express from 'express';
import { getAllInfo, getQueries, raiseQuery } from '../controllers/query.controller.js';
import ProtectRoute, { requireAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();
router.post('/create-query', ProtectRoute, raiseQuery);
router.get('/get-queries', ProtectRoute, requireAdmin, getQueries);
router.get("/getDetails", ProtectRoute, requireAdmin, getAllInfo);

export default router;
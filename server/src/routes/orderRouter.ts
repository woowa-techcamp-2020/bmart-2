import express from 'express';
import { OrderController } from '../controllers';
import { wrapAsync } from '../utils';
import authMiddleware from '../middleware/auth';

const router = express.Router();
router.post('/', authMiddleware, wrapAsync(OrderController.create));
router.get('/', authMiddleware, wrapAsync(OrderController.findByUserId));
export default router;

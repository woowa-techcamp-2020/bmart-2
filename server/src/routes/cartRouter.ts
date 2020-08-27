import express from 'express';
import { CartController } from '../controllers';
import { wrapAsync } from '../utils';
import authMiddleware from '../middleware/auth';

const router = express.Router();
router.post('/', authMiddleware, wrapAsync(CartController.create));
router.delete('/:productId', authMiddleware, wrapAsync(CartController.remove));
router.get('/', authMiddleware, wrapAsync(CartController.find));
router.put('/', authMiddleware, wrapAsync(CartController.update));
export default router;

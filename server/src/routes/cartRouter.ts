import express from 'express';
import { CartController } from '../controllers';
import { wrapAsync } from '../utils';
import authMiddleware from '../middleware/auth';

const router = express.Router();
router.post('/', authMiddleware, wrapAsync(CartController.create));
router.delete('/user', authMiddleware, wrapAsync(CartController.removeByUser));
router.delete('/:productId', authMiddleware, wrapAsync(CartController.remove));
router.get(
  '/exist/:productId',
  authMiddleware,
  wrapAsync(CartController.isExist)
);
router.get('/', authMiddleware, wrapAsync(CartController.find));
router.put('/', authMiddleware, wrapAsync(CartController.update));
export default router;

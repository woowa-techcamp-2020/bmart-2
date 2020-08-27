import express from 'express';
import { DibController } from '../controllers';
import { wrapAsync } from '../utils';
import authMiddleware from '../middleware/auth';

const router = express.Router();
router.post('/', authMiddleware, wrapAsync(DibController.create));
router.delete('/:productId', authMiddleware, wrapAsync(DibController.remove));
router.get('/', authMiddleware, wrapAsync(DibController.find));

export default router;

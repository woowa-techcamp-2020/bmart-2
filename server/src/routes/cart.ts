import express from 'express';
import { CartController } from '../controllers';
import { wrapAsync } from '../utils';

const router = express.Router();
router.post('/', wrapAsync(CartController.create));
router.delete('/:productId', wrapAsync(CartController.remove));

export default router;

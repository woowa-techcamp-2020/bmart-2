import express from 'express';
import { OrderController } from '../controllers';
import { wrapAsync } from '../utils';

const router = express.Router();
router.post('/', wrapAsync(OrderController.create));

export default router;

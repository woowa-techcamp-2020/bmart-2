import express from 'express';
import { DibController } from '../controllers';
import { wrapAsync } from '../utils';

const router = express.Router();
router.post('/', wrapAsync(DibController.create));
router.delete('/:productId', wrapAsync(DibController.remove));
router.get('/:userId', wrapAsync(DibController.find));

export default router;

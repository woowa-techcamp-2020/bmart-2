import express from 'express';
import { UserController } from '../controllers';
import { wrapAsync } from '../utils';

const router = express.Router();
router.post('/', wrapAsync(UserController.create));
router.get('/:id', wrapAsync(UserController.find));

export default router;

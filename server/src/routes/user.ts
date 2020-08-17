import express from 'express';
import { UserController } from '../controllers';
import { wrapAsync } from '../utils';

const router = express.Router();
router.post('/', wrapAsync(UserController.create));

export default router;

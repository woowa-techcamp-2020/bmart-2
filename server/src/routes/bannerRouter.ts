import express from 'express';
import { BannerController } from '../controllers';
import { wrapAsync } from '../utils';

const router = express.Router();
router.get('/', wrapAsync(BannerController.findAll));
router.post('/', wrapAsync(BannerController.create));

export default router;

import express from 'express';
import { BannerController } from '../controllers';

const router = express.Router();
router.get('/', BannerController.findAll);
router.post('/', BannerController.create);

export default router;

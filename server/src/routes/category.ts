import express from 'express';
import { CategoryController } from '../controllers';
import { wrapAsync } from '../utils';

const router = express.Router();
router.get('/', wrapAsync(CategoryController.findAll));
router.post('/', wrapAsync(CategoryController.create));

export default router;

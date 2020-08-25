import express from 'express';
import { SubCategoryController } from '../controllers';
import { wrapAsync } from '../utils';

const router = express.Router();
router.get('/:categoryId', wrapAsync(SubCategoryController.findAll));
router.post('/', wrapAsync(SubCategoryController.create));

export default router;

import express from 'express';
import { SubCategoryController } from '../controllers';

const router = express.Router();
router.get('/:categoryId', SubCategoryController.findAll);
router.post('/', SubCategoryController.create);

export default router;

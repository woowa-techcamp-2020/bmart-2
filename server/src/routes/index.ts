import express from 'express';
import categoryRouter from './category';
import subCategoryRouter from './subCategory';

const router = express.Router();

router.use('/category', categoryRouter);
router.use('/sub-category', subCategoryRouter);

export default router;

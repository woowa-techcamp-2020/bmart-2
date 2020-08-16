import express from 'express';
import categoryRouter from './category';
import subCategoryRouter from './subCategory';
import bannerRouter from './banner';

const router = express.Router();

router.use('/category', categoryRouter);
router.use('/sub-category', subCategoryRouter);
router.use('/banner', bannerRouter);

export default router;

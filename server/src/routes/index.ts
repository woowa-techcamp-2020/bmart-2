import express from 'express';
import categoryRouter from './category';
import subCategoryRouter from './subCategory';
import bannerRouter from './banner';
import productRouter from './product';

const router = express.Router();

router.use('/category', categoryRouter);
router.use('/sub-category', subCategoryRouter);
router.use('/banner', bannerRouter);
router.use('/product', productRouter);

export default router;

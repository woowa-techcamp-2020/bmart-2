import express from 'express';
import categoryRouter from './category';
import subCategoryRouter from './subCategory';
import bannerRouter from './banner';
import productRouter from './product';
import userRouter from './user';
import dibRouter from './dib';
import orderRouter from './order';
import cartRouter from './cart';

const router = express.Router();

router.use('/category', categoryRouter);
router.use('/sub-category', subCategoryRouter);
router.use('/banner', bannerRouter);
router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/order', orderRouter);
router.use('/dib', dibRouter);
router.use('/cart', cartRouter);

export default router;

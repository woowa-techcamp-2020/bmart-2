import express from 'express';
import categoryRouter from './categoryRouter';
import subCategoryRouter from './subCategoryRouter';
import bannerRouter from './bannerRouter';
import productRouter from './productRouter';
import userRouter from './userRouter';
import dibRouter from './dibRouter';
import orderRouter from './orderRouter';
import cartRouter from './cartRouter';

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

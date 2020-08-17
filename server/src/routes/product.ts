import express from 'express';
import { ProductController } from '../controllers';
import { wrapAsync } from '../utils';

const router = express.Router();
router.get('/', wrapAsync(ProductController.findAll));
router.post('/', wrapAsync(ProductController.create));
router.delete('/:id', wrapAsync(ProductController.softDelete));

export default router;

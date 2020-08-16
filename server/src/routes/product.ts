import express from 'express';
import { ProductController } from '../controllers';

const router = express.Router();
router.get('/', ProductController.findAll);
router.post('/', ProductController.create);
router.delete('/:id', ProductController.softDelete);

export default router;

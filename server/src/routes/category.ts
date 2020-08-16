import express from 'express';
import { CategoryController } from '../controllers';

const router = express.Router();
router.get('/', CategoryController.findAll);
router.post('/', CategoryController.create);

export default router;

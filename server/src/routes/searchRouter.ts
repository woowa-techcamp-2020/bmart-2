import express from 'express';
import searchController from '../controllers/searchController';
import { wrapAsync } from '../utils';

const router = express.Router();
router.get('/', wrapAsync(searchController.findAll));

export default router;

import express from 'express';
import searchHistoryController from '../controllers/searchHistoryController';
import { wrapAsync } from '../utils';

const router = express.Router();
router.get('/:userId', wrapAsync(searchHistoryController.findAll));
router.delete(
  '/:id',
  wrapAsync(searchHistoryController.deleteSearchHistoryById)
);
router.delete(
  '/all/:userId',
  wrapAsync(searchHistoryController.deleteSearchHistoryByUserId)
);
router.post('/', wrapAsync(searchHistoryController.create));

export default router;

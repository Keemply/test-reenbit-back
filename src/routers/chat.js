import { Router } from 'express';
import {
  createChatController,
  getChatsController,
  updateChatController,
} from '../controllers/chat.js';
import { authenticate } from '../middlewares/authenticate.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();
router.use(authenticate);
router.get('/allChats', ctrlWrapper(getChatsController));
router.post('/create', ctrlWrapper(createChatController));
router.patch('/update', ctrlWrapper(updateChatController));

export default router;

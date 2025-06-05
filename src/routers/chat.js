import { Router } from 'express';
import {
  createChatController,
  deleteChatController,
  getChatsController,
  updateChatController,
  updateProfileController,
} from '../controllers/chat.js';
import { authenticate } from '../middlewares/authenticate.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();
router.use(authenticate);
router.get('/allChats', ctrlWrapper(getChatsController));
router.post('/create', ctrlWrapper(createChatController));
router.patch('/update', ctrlWrapper(updateChatController));
router.patch('/profileUpdate', ctrlWrapper(updateProfileController));
router.delete('/delete', ctrlWrapper(deleteChatController));

export default router;

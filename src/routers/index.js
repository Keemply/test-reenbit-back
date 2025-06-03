import { Router } from 'express';
import authRouter from './auth.js';
import chatRouter from './chat.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/chat', chatRouter);
export default router;

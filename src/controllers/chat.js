import { createChat, getChats, updateChat } from '../services/chat.js';

export const createChatController = async (req, res) => {
  const chat = await createChat(req.body, req.user._id);

  res.json({
    status: 200,
    message: 'Chat successfully created!',
    data: chat,
  });
};
export const getChatsController = async (req, res) => {
  const chats = await getChats(req.user._id);

  res.json({
    status: 200,
    message: 'Here all chats of this user',
    data: chats,
  });
};
export const updateChatController = async (req, res) => {
  const updatedChat = await updateChat(req.body);

  res.json({
    status: 200,
    message: 'Chat updated',
    data: updatedChat,
  });
};

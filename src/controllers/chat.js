import {
  createChat,
  deleteChat,
  getChats,
  updateChat,
  updateProfile,
} from '../services/chat.js';

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
export const deleteChatController = async (req, res) => {
  await deleteChat(req.body);
  res.json({
    status: 200,
    message: 'Chat deleted',
  });
};
export const updateProfileController = async (req, res) => {
  const date = await updateProfile(req.body);

  res.json({
    status: 200,
    message: 'Successfully updated profile',
    date,
  });
};

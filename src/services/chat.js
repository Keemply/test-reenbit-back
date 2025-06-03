import { ChatsCollection } from '../db/models/chat.js';

export const createChat = async (payload, userId) => {
  return await ChatsCollection.create({ ...payload, ownerId: userId });
};

export const getChats = async (payload) => {
  return await ChatsCollection.find({ ownerId: payload });
};
export const updateChat = async (payload) => {
  const chat = await ChatsCollection.findById(payload.chatId);
  chat.messages.push(payload.newMessage);
  return await chat.save();
};

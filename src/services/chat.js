import { ChatsCollection } from '../db/models/chat.js';

export const createChat = async (payload, userId) => {
  return await ChatsCollection.create({ ...payload, ownerId: userId });
};
export const updateProfile = async (payload) => {
  const chat = await ChatsCollection.findById(payload.chatId);
  if (payload.firstName && payload.firstName !== '') {
    chat.firstName = payload.firstName;
  }
  if (payload.lastName && payload.firstName !== '') {
    chat.lastName = payload.lastName;
  }
  chat.save();
};
export const getChats = async (payload) => {
  return await ChatsCollection.find({ ownerId: payload });
};
export const updateChat = async (payload) => {
  const chat = await ChatsCollection.findById(payload.chatId);
  if (!Array.isArray(chat.messages)) {
    chat.messages = [];
  }
  chat.messages.push(payload.newMessage);
  return await chat.save();
};
export const deleteChat = async (payload) => {
  return await ChatsCollection.findOneAndDelete({ _id: payload.chatId });
};

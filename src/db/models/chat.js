import mongoose, { model, Schema } from 'mongoose';
const messageSchema = new Schema({
  text: { type: String, required: true },
  timeStamp: { type: Date, default: Date.now },
  userMessage: { type: Boolean, required: true },
});
const chatsSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    messages: [messageSchema],
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { time: true, versionKey: false },
);
export const ChatsCollection = model('chats', chatsSchema);

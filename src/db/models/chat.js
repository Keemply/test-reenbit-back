import mongoose, { model, Schema } from 'mongoose';
const messageSchema = new Schema({
  text: { type: String },
  timeStamp: { type: Date },
  userMessage: { type: Boolean },
});
const chatsSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    messages: { type: [messageSchema] },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  { time: true, versionKey: false },
);
export const ChatsCollection = model('chats', chatsSchema);

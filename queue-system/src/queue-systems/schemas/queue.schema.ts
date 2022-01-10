import * as mongoose from 'mongoose';

export const queueSchema = new mongoose.Schema({
  name: String,
  priority: Number,
});

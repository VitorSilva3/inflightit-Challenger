import { Document } from 'mongoose';

export class Queue extends Document {
  name: string;
  priority: number;
}

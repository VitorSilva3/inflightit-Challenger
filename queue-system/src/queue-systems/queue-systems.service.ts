import { Injectable } from '@nestjs/common';
import { Queue } from './class/queue';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { randomBytes } from 'crypto';

@Injectable()
export class QueueSystemsService {
  constructor(
    @InjectModel('queue') private readonly queueModel: Model<Queue>,
  ) {}

  public hash;

  async getAll() {
    return await this.queueModel.find().sort({ priority: -1 });
  }

  async getCustomer() {
    const result = await this.queueModel
      .findOne({}, { name: true, priority: true })
      .sort({ priority: -1 });

    if (!result) return { result: null };
    this.deleteCustomer(result._id);

    return { result: { name: result.name, priority: result.priority } };
  }

  async deleteCustomer(id) {
    return await this.queueModel.findByIdAndDelete(id);
  }

  async addToQueue(queue: Queue) {
    if (!queue.name) return { result: 'Missing Name' };
    if (!queue.priority || queue.priority < 0 || queue.priority > 10)
      return { result: 'Error Priority, value must be 0 to 10 ' };

    const add = new this.queueModel(queue);
    await add.save();

    return { result: true };
  }

  async askReset() {
    this.hash = randomBytes(32).toString('hex').toUpperCase();

    return await { code: this.hash };
  }

  async reset(hashUser) {
    if (this.hash !== hashUser) return { result: false };

    await this.queueModel.remove();

    return { result: true };
  }
}

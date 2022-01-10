import { Injectable } from '@nestjs/common';
import { Queue } from './class/queue';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QueueSystemsService {
  constructor(
    @InjectModel('queue') private readonly queueModel: Model<Queue>,
  ) {}

  async getAll() {
    return await this.queueModel.find().sort({ priority: -1 });
  }

  async getCustomer() {
    return await this.queueModel
      .findOne({}, { name: true, priority: true })
      .sort({ priority: -1 });

  }

  async addToQueue(queue: Queue) {
    const add = new this.queueModel(queue);
    return await add.save();
  }
}

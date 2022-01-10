import { QueueSystemsService } from './queue-systems.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Queue } from './class/queue';

@Controller('api/v0/')
export class QueueSystemsController {
  constructor(private queueSystemsService: QueueSystemsService) {}

  @Get()
  async getAll(): Promise<Queue[]> {
    return this.queueSystemsService.getAll();
  }

  @Get('getNextCustomer')
  async getCustomer(): Promise<Queue> {
    return this.queueSystemsService.getCustomer();
  }

  @Post('addCustomer')
  async create(@Body() queue: Queue): Promise<Queue> {
    return this.queueSystemsService.addToQueue(queue);
  }
}

import { QueueSystemsService } from './queue-systems.service';
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { Queue } from './class/queue';

@Controller('api/v0/')
export class QueueSystemsController {
  constructor(private queueSystemsService: QueueSystemsService) {}

  @Get()
  async getAll(): Promise<Queue[]> {
    return this.queueSystemsService.getAll();
  }

  @Get('getNextCustomer')
  async getCustomer() {
    return this.queueSystemsService.getCustomer();
  }

  @Post('addCustomer')
  async create(@Body() queue: Queue) {
    return this.queueSystemsService.addToQueue(queue);
  }

  @Get('ask-to-reset')
  async askReset() {
    return this.queueSystemsService.askReset();
  }

  @Get('reset')
  async reset(@Query() query: any) {
    return this.queueSystemsService.reset(query.code);
  }
}

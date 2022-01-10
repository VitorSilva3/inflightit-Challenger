import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { QueueSystemsController } from './queue-systems.controller';
import { QueueSystemsService } from './queue-systems.service';
import { queueSchema } from './schemas/queue.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'queue', schema: queueSchema }]),
  ],
  controllers: [QueueSystemsController],
  providers: [QueueSystemsService],
})
export class QueueSystemsModule {}

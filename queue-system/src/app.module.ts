import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { QueueSystemsModule } from './queue-systems/queue-systems.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://VitorSillva:12345@cluster0.j3gy6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    QueueSystemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

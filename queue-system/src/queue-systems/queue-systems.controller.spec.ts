import { Test, TestingModule } from '@nestjs/testing';
import { QueueSystemsController } from './queue-systems.controller';

describe('QueueSystemsController', () => {
  let controller: QueueSystemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueueSystemsController],
    }).compile();

    controller = module.get<QueueSystemsController>(QueueSystemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

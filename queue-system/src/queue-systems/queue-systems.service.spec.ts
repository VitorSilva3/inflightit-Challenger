import { Test, TestingModule } from '@nestjs/testing';
import { QueueSystemsService } from './queue-systems.service';

describe('QueueSystemsService', () => {
  let provider: QueueSystemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueueSystemsService],
    }).compile();

    provider = module.get<QueueSystemsService>(QueueSystemsService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

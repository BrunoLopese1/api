import { Test, TestingModule } from '@nestjs/testing';
import { UserQueuesService } from './user-queues.service';

describe('UserQueuesService', () => {
  let service: UserQueuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserQueuesService],
    }).compile();

    service = module.get<UserQueuesService>(UserQueuesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { UserQueuesController } from './user-queues.controller';
import { UserQueuesService } from './user-queues.service';

describe('UserQueuesController', () => {
  let controller: UserQueuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserQueuesController],
      providers: [UserQueuesService],
    }).compile();

    controller = module.get<UserQueuesController>(UserQueuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

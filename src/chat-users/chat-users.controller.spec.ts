import { Test, TestingModule } from '@nestjs/testing';
import { ChatUsersController } from './chat-users.controller';
import { ChatUsersService } from './chat-users.service';

describe('ChatUsersController', () => {
  let controller: ChatUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatUsersController],
      providers: [ChatUsersService],
    }).compile();

    controller = module.get<ChatUsersController>(ChatUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

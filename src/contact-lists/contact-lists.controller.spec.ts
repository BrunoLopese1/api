import { Test, TestingModule } from '@nestjs/testing';
import { ContactListsController } from './contact-lists.controller';
import { ContactListsService } from './contact-lists.service';

describe('ContactListsController', () => {
  let controller: ContactListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactListsController],
      providers: [ContactListsService],
    }).compile();

    controller = module.get<ContactListsController>(ContactListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

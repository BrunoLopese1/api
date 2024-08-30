import { Test, TestingModule } from '@nestjs/testing';
import { ContactListItemsController } from './contact-list-items.controller';
import { ContactListItemsService } from './contact-list-items.service';

describe('ContactListItemsController', () => {
  let controller: ContactListItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactListItemsController],
      providers: [ContactListItemsService],
    }).compile();

    controller = module.get<ContactListItemsController>(
      ContactListItemsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

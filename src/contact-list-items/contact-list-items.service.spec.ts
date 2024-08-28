import { Test, TestingModule } from '@nestjs/testing';
import { ContactListItemsService } from './contact-list-items.service';

describe('ContactListItemsService', () => {
  let service: ContactListItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactListItemsService],
    }).compile();

    service = module.get<ContactListItemsService>(ContactListItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

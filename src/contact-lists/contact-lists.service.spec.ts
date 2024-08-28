import { Test, TestingModule } from '@nestjs/testing';
import { ContactListsService } from './contact-lists.service';

describe('ContactListsService', () => {
  let service: ContactListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactListsService],
    }).compile();

    service = module.get<ContactListsService>(ContactListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

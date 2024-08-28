import { Test, TestingModule } from '@nestjs/testing';
import { ContactTagsService } from './contact-tags.service';

describe('ContactTagsService', () => {
  let service: ContactTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactTagsService],
    }).compile();

    service = module.get<ContactTagsService>(ContactTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

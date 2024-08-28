import { Test, TestingModule } from '@nestjs/testing';
import { TicketTagsService } from './ticket-tags.service';

describe('TicketTagsService', () => {
  let service: TicketTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketTagsService],
    }).compile();

    service = module.get<TicketTagsService>(TicketTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TicketNotesService } from './ticket-notes.service';

describe('TicketNotesService', () => {
  let service: TicketNotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketNotesService],
    }).compile();

    service = module.get<TicketNotesService>(TicketNotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

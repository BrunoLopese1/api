import { Test, TestingModule } from '@nestjs/testing';
import { TicketTrakingService } from './ticket-traking.service';

describe('TicketTrakingService', () => {
  let service: TicketTrakingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketTrakingService],
    }).compile();

    service = module.get<TicketTrakingService>(TicketTrakingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

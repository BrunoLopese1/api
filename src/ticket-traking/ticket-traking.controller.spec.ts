import { Test, TestingModule } from '@nestjs/testing';
import { TicketTrakingController } from './ticket-traking.controller';
import { TicketTrakingService } from './ticket-traking.service';

describe('TicketTrakingController', () => {
  let controller: TicketTrakingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketTrakingController],
      providers: [TicketTrakingService],
    }).compile();

    controller = module.get<TicketTrakingController>(TicketTrakingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

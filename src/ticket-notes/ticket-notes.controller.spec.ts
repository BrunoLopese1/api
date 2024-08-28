import { Test, TestingModule } from '@nestjs/testing';
import { TicketNotesController } from './ticket-notes.controller';
import { TicketNotesService } from './ticket-notes.service';

describe('TicketNotesController', () => {
  let controller: TicketNotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketNotesController],
      providers: [TicketNotesService],
    }).compile();

    controller = module.get<TicketNotesController>(TicketNotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

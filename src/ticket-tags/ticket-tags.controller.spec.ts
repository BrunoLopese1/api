import { Test, TestingModule } from '@nestjs/testing';
import { TicketTagsController } from './ticket-tags.controller';
import { TicketTagsService } from './ticket-tags.service';

describe('TicketTagsController', () => {
  let controller: TicketTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketTagsController],
      providers: [TicketTagsService],
    }).compile();

    controller = module.get<TicketTagsController>(TicketTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

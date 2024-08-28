import { Test, TestingModule } from '@nestjs/testing';
import { ContactTagsController } from './contact-tags.controller';
import { ContactTagsService } from './contact-tags.service';

describe('ContactTagsController', () => {
  let controller: ContactTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactTagsController],
      providers: [ContactTagsService],
    }).compile();

    controller = module.get<ContactTagsController>(ContactTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

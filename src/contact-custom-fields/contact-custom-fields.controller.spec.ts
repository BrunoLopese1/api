import { Test, TestingModule } from '@nestjs/testing';
import { ContactCustomFieldsController } from './contact-custom-fields.controller';
import { ContactCustomFieldsService } from './contact-custom-fields.service';

describe('ContactCustomFieldsController', () => {
  let controller: ContactCustomFieldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactCustomFieldsController],
      providers: [ContactCustomFieldsService],
    }).compile();

    controller = module.get<ContactCustomFieldsController>(ContactCustomFieldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

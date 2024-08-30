import { Test, TestingModule } from '@nestjs/testing';
import { ContactCustomFieldsService } from './contact-custom-fields.service';

describe('ContactCustomFieldsService', () => {
  let service: ContactCustomFieldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactCustomFieldsService],
    }).compile();

    service = module.get<ContactCustomFieldsService>(
      ContactCustomFieldsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

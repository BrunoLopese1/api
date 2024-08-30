import { Test, TestingModule } from '@nestjs/testing';
import { ReasonForTransferController } from './reason-for-transfer.controller';
import { ReasonForTransferService } from './reason-for-transfer.service';

describe('ReasonForTransferController', () => {
  let controller: ReasonForTransferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReasonForTransferController],
      providers: [ReasonForTransferService],
    }).compile();

    controller = module.get<ReasonForTransferController>(
      ReasonForTransferController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

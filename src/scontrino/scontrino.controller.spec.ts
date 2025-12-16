import { Test, TestingModule } from '@nestjs/testing';
import { ScontrinoController } from './scontrino.controller';
import { ScontrinoService } from './scontrino.service';

describe('ScontrinoController', () => {
  let controller: ScontrinoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScontrinoController],
      providers: [ScontrinoService],
    }).compile();

    controller = module.get<ScontrinoController>(ScontrinoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

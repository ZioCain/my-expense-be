import { Test, TestingModule } from '@nestjs/testing';
import { ScontrinoService } from './scontrino.service';

describe('ScontrinoService', () => {
  let service: ScontrinoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScontrinoService],
    }).compile();

    service = module.get<ScontrinoService>(ScontrinoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

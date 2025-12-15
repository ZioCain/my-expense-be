import { Test, TestingModule } from '@nestjs/testing';
import { MarketBrandService } from './market-brand.service';

describe('MarketBrandService', () => {
  let service: MarketBrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarketBrandService],
    }).compile();

    service = module.get<MarketBrandService>(MarketBrandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

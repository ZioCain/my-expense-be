import { Test, TestingModule } from '@nestjs/testing';
import { MarketStoreService } from './market-store.service';

describe('MarketStoreService', () => {
  let service: MarketStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarketStoreService],
    }).compile();

    service = module.get<MarketStoreService>(MarketStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

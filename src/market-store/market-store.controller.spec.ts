import { Test, TestingModule } from '@nestjs/testing';
import { MarketStoreController } from './market-store.controller';
import { MarketStoreService } from './market-store.service';

describe('MarketStoreController', () => {
  let controller: MarketStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketStoreController],
      providers: [MarketStoreService],
    }).compile();

    controller = module.get<MarketStoreController>(MarketStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

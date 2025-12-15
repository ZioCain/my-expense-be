import { Test, TestingModule } from '@nestjs/testing';
import { MarketBrandController } from './market-brand.controller';
import { MarketBrandService } from './market-brand.service';

describe('MarketBrandController', () => {
  let controller: MarketBrandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarketBrandController],
      providers: [MarketBrandService],
    }).compile();

    controller = module.get<MarketBrandController>(MarketBrandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

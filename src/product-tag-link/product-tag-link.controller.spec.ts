import { Test, TestingModule } from '@nestjs/testing';
import { ProductTagLinkController } from './product-tag-link.controller';
import { ProductTagLinkService } from './product-tag-link.service';

describe('ProductTagLinkController', () => {
  let controller: ProductTagLinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductTagLinkController],
      providers: [ProductTagLinkService],
    }).compile();

    controller = module.get<ProductTagLinkController>(ProductTagLinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

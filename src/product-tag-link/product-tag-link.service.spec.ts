import { Test, TestingModule } from '@nestjs/testing';
import { ProductTagLinkService } from './product-tag-link.service';

describe('ProductTagLinkService', () => {
  let service: ProductTagLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductTagLinkService],
    }).compile();

    service = module.get<ProductTagLinkService>(ProductTagLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

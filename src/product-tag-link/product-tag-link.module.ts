import { Module } from '@nestjs/common';
import { ProductTagLinkService } from './product-tag-link.service';
import { ProductTagLinkController } from './product-tag-link.controller';

@Module({
  controllers: [ProductTagLinkController],
  providers: [ProductTagLinkService],
})
export class ProductTagLinkModule {}

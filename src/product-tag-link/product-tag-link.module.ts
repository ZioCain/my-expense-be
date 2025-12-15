import { Module } from '@nestjs/common';
import { ProductTagLinkService } from './product-tag-link.service';
import { ProductTagLinkController } from './product-tag-link.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTagLink } from './entities/product-tag-link.entity';

@Module({
	imports: [TypeOrmModule.forFeature([ProductTagLink])],
	controllers: [ProductTagLinkController],
	providers: [ProductTagLinkService],
})
export class ProductTagLinkModule { }

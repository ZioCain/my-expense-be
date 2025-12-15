import { Module } from '@nestjs/common';
import { ProductTagService } from './product-tag.service';
import { ProductTagController } from './product-tag.controller';
import { ProductTag } from './entities/product-tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([ProductTag])],
	controllers: [ProductTagController],
	providers: [ProductTagService],
})
export class ProductTagModule { }

import { Module } from '@nestjs/common';
import { ProductBrandService } from './product-brand.service';
import { ProductBrandController } from './product-brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductBrand } from './entities/product-brand.entity';

@Module({
	imports: [TypeOrmModule.forFeature([ProductBrand])],
	controllers: [ProductBrandController],
	providers: [ProductBrandService],
})
export class ProductBrandModule { }

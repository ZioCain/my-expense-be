import { Expose } from 'class-transformer';
import { ProductBrand } from 'src/product-brand/entities/product-brand.entity';

export class ProductResponseDto {
	@Expose()
	id: string;

	@Expose()
	name: string;

	@Expose()
	image: string;

	@Expose()
	barcode: string;

	@Expose()
	brand: ProductBrand;
}
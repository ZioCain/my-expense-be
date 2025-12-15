import { Expose } from 'class-transformer';
import { Expense } from 'src/expense/entities/expense.entity';
import { ProductBrand } from 'src/product-brand/entities/product-brand.entity';
import { ProductTag } from 'src/product-tag/entities/product-tag.entity';

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
	product_brand_id: string;

	@Expose()
	productBrand: ProductBrand;

	@Expose()
	tags: ProductTag[];

	@Expose()
	expenses:Expense[];
}
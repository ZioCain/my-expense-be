import { Expose } from 'class-transformer';
import { Product } from 'src/product/entities/product.entity';

export class ExpenseResponseDto {
	@Expose()
	id: string;

	@Expose()
	product_id: string;

	@Expose()
	product: Product;

	@Expose()
	price: number;

	@Expose()
	discount: number;

	@Expose()
	buy_date: Date;
}
import { Expose } from 'class-transformer';
import { Product } from 'src/product/entities/product.entity';
import { Scontrino } from 'src/scontrino/entities/scontrino.entity';

export class ExpenseResponseDto {
	@Expose()
	id: string;

	@Expose()
	product_id: string;

	@Expose()
	scontrino_id: string;

	@Expose()
	product: Product;

	@Expose()
	price: number;

	@Expose()
	discount: number;

	@Expose()
	scontrino: Scontrino;
}
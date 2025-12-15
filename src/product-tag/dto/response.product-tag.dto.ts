import { Expose } from 'class-transformer';
import { MarketStore } from '../../market-store/entities/market-store.entity';
import { IsArray } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';

export class ProductTagResponseDto {
	@Expose()
	id: string;

	@Expose()
	name: string;

	@Expose()
	products: Product[];
}
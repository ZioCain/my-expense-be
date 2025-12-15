import { Expose } from 'class-transformer';
import { MarketBrand } from 'src/market-brand/entities/market-brand.entity';

export class MarketStoreResponseDto {
	@Expose()
	id: string;

	@Expose()
	name: string;

	@Expose()
	address: string;

	@Expose()
	latitudine: number;

	@Expose()
	longitudine: number;

	@Expose()
	marketBrand: MarketBrand;

	@Expose()
	market_brand_id: string;
}
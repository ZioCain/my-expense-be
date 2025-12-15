import { PartialType } from '@nestjs/mapped-types';
import { CreateMarketStoreDto } from './create-market-store.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateMarketStoreDto extends PartialType(CreateMarketStoreDto) {
	@IsString()
	readonly address?: string | undefined;

	@IsNumber()
	readonly latitudine?: number | undefined;

	@IsNumber()
	readonly longitudine?: number | undefined;

	@IsString()
	readonly market_brand_id?: string | undefined;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateMarketBrandDto } from './create-market-brand.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateMarketBrandDto extends PartialType(CreateMarketBrandDto) {
	@IsString()
	@IsOptional()
	readonly name: string;

	@IsString()
	@IsOptional()
	readonly logo: string;
}

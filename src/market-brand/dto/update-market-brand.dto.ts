import { PartialType } from '@nestjs/mapped-types';
import { CreateMarketBrandDto } from './create-market-brand.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateMarketBrandDto extends PartialType(CreateMarketBrandDto) {
	@IsString()
	@IsNotEmpty()
	name: string;
}

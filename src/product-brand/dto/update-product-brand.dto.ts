import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductBrandDto } from './create-product-brand.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateProductBrandDto extends PartialType(CreateProductBrandDto) {
	@ApiProperty({description: "Il nome del brand", example: "Brand", type: "string"})
	@IsString()
	@IsOptional()
	readonly name: string;

	@ApiProperty({description: "Il logo del brand", example: "<url immagine>", type: "string"})
	@IsString()
	@IsOptional()
	readonly logo: string;
}

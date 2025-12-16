import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsString, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
	@ApiProperty({description: "Il nome del prodotto", example: "Spaghetti", type: "string"})
	@IsString()
	@IsNotEmpty()
	readonly name:string;

	@ApiProperty({description: "L'immagine del prodotto", example: "<url immagine>", type: "string", required: false})
	@IsString()
	@IsOptional()
	readonly image?:string;

	@ApiProperty({description: "Codice a barre del prodotto", example: "Codice a barre", type: "string", required: false})
	@IsString()
	@IsOptional()
	readonly barcode?:string;

	@ApiProperty({description: "Il brand/marchio del prodotto (UUID)", example: "UUID", type: "string", required: true})
	@IsUUID()
	@IsNotEmpty()
	readonly product_brand_id?: string;
}

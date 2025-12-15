import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductTagDto } from './create-product-tag.dto';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateProductTagDto extends PartialType(CreateProductTagDto) {
	@ApiProperty({description:"Il nome del tag", example: "Cibo", type: "string"})
	@IsString()
	@IsNotEmpty()
	readonly name:string;
}

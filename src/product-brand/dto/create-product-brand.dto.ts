import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProductBrandDto {
	@ApiProperty({description: "Il nome del brand", example: "Brand", type: "string"})
	@IsString()
	readonly name: string;

	@ApiProperty({description: "Il logo del brand", example: "<url immagine>", type: "string"})
	@IsString()
	readonly logo: string;
}

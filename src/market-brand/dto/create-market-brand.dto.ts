import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateMarketBrandDto {
	@ApiProperty({description: "Il nome del brand", example: "Carrefour", type: "string"})
	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.trim())
	readonly name: string;
}

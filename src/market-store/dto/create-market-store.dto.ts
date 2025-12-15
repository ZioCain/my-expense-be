import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMarketStoreDto {
	@ApiProperty({description: "Indirizzo del luogo", example: "Via salcazzi, 15"})
	@IsString()
	@IsOptional()
	readonly address:string;

	@ApiProperty({description: "Latitudine del luogo (paralleli)", example: "45"})
	@IsNumber()
	@IsOptional()
	readonly latitudine:number;

	@ApiProperty({description: "Longitudine del luogo (meridiani)", example: "9"})
	@IsNumber()
	@IsOptional()
	readonly longitudine:number;

	@ApiProperty({description: "ID del brand di supermercato", example: "UUID"})
	@IsString()
	@IsNotEmpty()
	readonly market_brand_id:string;
}

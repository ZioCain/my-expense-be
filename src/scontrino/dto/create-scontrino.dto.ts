import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateScontrinoDto {
	@ApiProperty({description: "Data in cui è avvenuto l'acquisto", example: "2025-10-10", type: "string"})
	@IsNotEmpty()
	readonly buy_date: Date;

	@ApiProperty({description: "Lo store in cui è avvenuto l'acquisto", example: "UUID", type: "string"})
	@IsString()
	@IsNotEmpty()
	readonly market_store_id: string;

	@ApiProperty({description: "L'importo totale dello scontrino", example: "10.92", type: "number"})
	@IsNumber()
	@IsOptional()
	readonly total: number;
}

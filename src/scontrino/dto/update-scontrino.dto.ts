import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateScontrinoDto } from './create-scontrino.dto';
import { IsDate, IsNotEmpty, IsString, IsNumber, IsPositive, IsOptional } from 'class-validator';

export class UpdateScontrinoDto extends PartialType(CreateScontrinoDto) {
	@ApiProperty({description: "Data in cui è avvenuto l'acquisto", example: "2025-10-10", type: "string"})
	@IsDate()
	@IsNotEmpty()
	readonly buy_date: Date;

	@ApiProperty({description: "Lo store in cui è avvenuto l'acquisto", example: "UUID", type: "string"})
	@IsString()
	@IsNotEmpty()
	readonly market_store_id: string;

	@ApiProperty({description: "L'importo totale dello scontrino", example: "10.92", type: "number"})
	@IsNumber()
	@IsPositive()
	@IsOptional()
	readonly total: number;
}

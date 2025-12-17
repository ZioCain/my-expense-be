import { PartialType } from '@nestjs/swagger';
import { CreateExpenseDto } from './create-expense.dto';
import { IsNumber, IsPositive, IsOptional, IsUUID, IsNotEmpty } from 'class-validator';

export class UpdateExpenseDto extends PartialType(CreateExpenseDto) {
	@IsNumber()
	@IsPositive()
	readonly price: number;

	@IsNumber()
	@IsOptional()
	readonly discount: number;

	@IsUUID()
	@IsNotEmpty()
	product_id: string;

	@IsUUID()
	@IsNotEmpty()
	scontrino_id: string;
}

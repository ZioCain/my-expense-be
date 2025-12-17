import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsUUID } from "class-validator";

export class CreateExpenseDto {
	@IsNumber()
	@IsPositive()
	readonly price: number;

	@IsNumber()
	@IsOptional()
	readonly discount: number;

	@IsUUID()
	@IsNotEmpty()
	readonly product_id: string;

	@IsUUID()
	@IsNotEmpty()
	readonly scontrino_id: string;
}

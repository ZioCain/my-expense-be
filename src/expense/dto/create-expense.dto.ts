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
	product_id: string;
}

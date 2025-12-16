import { Expose } from 'class-transformer';
import { Expense } from 'src/expense/entities/expense.entity';
import { MarketStore } from 'src/market-store/entities/market-store.entity';

export class ScontrinoResponseDto {
	@Expose()
	id: string;

	@Expose()
	buy_date: Date;

	@Expose()
	total: number;

	@Expose()
	marketStore: MarketStore;

	@Expose()
	market_store_id: string;

	@Expose()
	expenses: Expense[];
}
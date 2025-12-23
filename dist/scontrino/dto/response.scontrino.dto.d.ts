import { Expense } from 'src/expense/entities/expense.entity';
import { MarketStore } from 'src/market-store/entities/market-store.entity';
export declare class ScontrinoResponseDto {
    id: string;
    buy_date: Date;
    total: number;
    marketStore: MarketStore;
    market_store_id: string;
    expenses: Expense[];
}

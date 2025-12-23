import { Expense } from "src/expense/entities/expense.entity";
import { MarketStore } from "src/market-store/entities/market-store.entity";
export declare class Scontrino {
    id: string;
    buy_date: Date;
    total: number;
    market_store_id: string;
    marketStore: MarketStore;
    expenses: Expense[];
}

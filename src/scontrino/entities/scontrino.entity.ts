import { Expense } from "src/expense/entities/expense.entity";
import { MarketStore } from "src/market-store/entities/market-store.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Scontrino {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	buy_date: Date;

	@Column()
	total: number = 0;

	@Column()
	market_store_id: string;

	@ManyToOne(() => MarketStore, (store) => store.receipts)
	@JoinColumn({ name: 'market_store_id' }) // Links this relationship object to the FK column above
	marketStore: MarketStore;

	@OneToMany(() => Expense, expense => expense.scontrino)
	expenses: Expense[];
}

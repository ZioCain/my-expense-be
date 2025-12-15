import { MarketStore } from "src/market-store/entities/market-store.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
	name: "market_brand",
})
export class MarketBrand {
	@PrimaryGeneratedColumn("uuid")
	id: string;
	@Column()
	name: string;
	@Column({default: null})
	logo: string;

	@OneToMany(() => MarketStore, marketStore => marketStore.marketBrand)
	stores: MarketStore[];
}

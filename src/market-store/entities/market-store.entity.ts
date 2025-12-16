import { MarketBrand } from "src/market-brand/entities/market-brand.entity";
import { Scontrino } from "src/scontrino/entities/scontrino.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
	name: "market_store"
})
export class MarketStore {
	@PrimaryGeneratedColumn("uuid")
	id: string;
	@Column()
	address:string;
	@Column()
	latitudine:number;
	@Column()
	longitudine:number;

	@Column({ name: 'market_brand_id' }) // Explicitly defines the column name in the DB
    market_brand_id: string;

	@ManyToOne(() => MarketBrand, (brand) => brand.stores)
    @JoinColumn({ name: 'market_brand_id' }) // Links this relationship object to the FK column above
    marketBrand: MarketBrand;

	@OneToMany(() => Scontrino, scontrino => scontrino.marketStore)
	receipts: Scontrino[];
}

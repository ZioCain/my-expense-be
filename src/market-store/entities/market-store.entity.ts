import { MarketBrand } from "src/market-brand/entities/market-brand.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MarketStore {
	@PrimaryGeneratedColumn()
	id: string;
	@Column()
	address:string;
	@Column()
	latitudine:number;
	@Column()
	longitudine:number;

	@ManyToOne(()=>MarketBrand, (brand)=>brand.stores)
	market_brand_id:string;
}

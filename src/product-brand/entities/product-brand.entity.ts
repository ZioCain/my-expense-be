import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "product_brand"})
export class ProductBrand {
	@PrimaryGeneratedColumn()
	id:string;

	@Column()
	name:string;

	@Column()
	logo:string;
}

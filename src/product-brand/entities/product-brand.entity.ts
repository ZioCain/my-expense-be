import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "product_brand"})
export class ProductBrand {
	@PrimaryGeneratedColumn()
	id:string;

	@Column()
	name:string;

	@Column()
	logo:string;

	@OneToMany(() => Product, product => product.productBrand)
	products: Product[];
}

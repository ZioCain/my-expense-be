import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "product_tag"})
export class ProductTag {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@ManyToMany(() => Product, (product) => product.tags) // References the 'products' property in ProductTag
	@JoinTable({
		// Optional: Customize the junction table name and column names
		name: 'product_tag_link',
		joinColumn: { name: 'product_tag_id' },
		inverseJoinColumn: { name: 'product_id' },
	})
	products: Product[];
}

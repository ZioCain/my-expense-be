import { ProductBrand } from "src/product-brand/entities/product-brand.entity";
import { ProductTag } from "src/product-tag/entities/product-tag.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "product"})
export class Product {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;

	@Column()
	image:string;

	@Column()
	barcode: string;

	@Column({ name: 'product_brand_id' }) // Explicitly defines the column name in the DB
	product_brand_id: string;

	@ManyToOne(() => ProductBrand, (brand) => brand.products)
	@JoinColumn({ name: 'product_brand_id' }) // Links this relationship object to the FK column above
	productBrand: ProductBrand;

	@ManyToMany(() => ProductTag, (tag) => tag.products) // References the 'products' property in ProductTag
    @JoinTable({
        // Optional: Customize the junction table name and column names
        name: 'product_tag_links',
        joinColumn: { name: 'product_id' },
        inverseJoinColumn: { name: 'product_tag_id' },
    })
    tags: ProductTag[];
}

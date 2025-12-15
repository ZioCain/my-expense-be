import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "product_tag"})
export class ProductTag {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	name: string;
}

import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expense {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	price: number;

	@Column()
	discount: number;

	@Column()
	buy_date: Date;

	@ManyToOne(() => Product, (product) => product.expenses)
	@JoinColumn({ name: 'product_id' }) // Links this relationship object to the FK column above
	product: Product;
}

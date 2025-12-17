import { Product } from "src/product/entities/product.entity";
import { Scontrino } from "src/scontrino/entities/scontrino.entity";
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
	scontrino_id: string;

	@Column()
	product_id: string;

	@ManyToOne(() => Scontrino, (scontrino) => scontrino.expenses)
	@JoinColumn({ name: 'scontrino_id' }) // Links this relationship object to the FK column above
	scontrino: Scontrino;

	@ManyToOne(() => Product, (product) => product.expenses)
	@JoinColumn({ name: 'product_id' }) // Links this relationship object to the FK column above
	product: Product;
}

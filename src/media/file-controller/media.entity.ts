import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Media{
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	upload_date: Date;

	@Column()
	path: string;
}
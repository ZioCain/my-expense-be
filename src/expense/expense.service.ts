import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { ExpenseResponseDto } from './dto/response.expense.dto';

@Injectable()
export class ExpenseService {
	constructor(
		@InjectRepository(Expense)
		private repo: Repository<Expense>,
	) { }

	async create(createExpenseDto: CreateExpenseDto) {
		const ent = await this.repo.save(this.repo.create(createExpenseDto));
		return plainToInstance(ExpenseResponseDto, ent);
	}

	async findAll() {
		return plainToInstance(ExpenseResponseDto, await this.repo.find());
	}

	async findOne(id: string) : Promise<Expense | null> {
		const ent = await this.repo.findOne({
			where: {id},
			relations: ['product', 'scontrino'],
		});
		return plainToInstance(ExpenseResponseDto, ent);
	}

	async update(id: string, updateDto: UpdateExpenseDto) {
		const existing = await this.findOne(id);
		if (!existing) throw new NotFoundException();
		this.repo.merge(existing, updateDto);
		return this.repo.save(existing);
	}

	remove(id: string) {
		this.repo.delete(id);
	}

	async getForProduct(product_id:string):Promise<Expense[]>{
		return plainToInstance(ExpenseResponseDto, await this.repo.find({
				where: {product_id},
				relations: ['scontrino'],
				order: {
					scontrino:{
						buy_date: 'DESC'
					}
				}
			})
		);
	}
}

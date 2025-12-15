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
		return plainToInstance(ExpenseResponseDto, ent, {
			excludeExtraneousValues: true,
		});
	}

	async findAll() {
		return plainToInstance(ExpenseResponseDto, await this.repo.find());
	}

	async findOne(id: string) : Promise<Expense | null> {
		const ent = await this.repo.findOne({
			where: {id},
			relations: ['productBrand', 'tags'],
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
		return `This action removes a #${id} expense`;
	}
}

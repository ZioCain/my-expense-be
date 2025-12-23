import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScontrinoDto } from './dto/create-scontrino.dto';
import { UpdateScontrinoDto } from './dto/update-scontrino.dto';
import { Scontrino } from './entities/scontrino.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { ScontrinoResponseDto } from './dto/response.scontrino.dto';
import { ExpenseResponseDto } from 'src/expense/dto/response.expense.dto';
import { Expense } from 'src/expense/entities/expense.entity';

@Injectable()
export class ScontrinoService {
	constructor(
		@InjectRepository(Scontrino)
		private repo: Repository<Scontrino>,
		@InjectRepository(Expense)
		private repoExpense: Repository<Expense>,
	) { }

	async create(createDto: CreateScontrinoDto) {
		return plainToInstance(ScontrinoResponseDto, await this.repo.save(this.repo.create(createDto)));
	}

	async findAll() {
		return plainToInstance(ScontrinoResponseDto, await this.repo.find({
			relations: ['marketStore']
		}));
	}

	async findOne(id: string) {
		return plainToInstance(ScontrinoResponseDto, await this.repo.findOne({ where: {id}, relations: ['marketStore'] }));
	}

	async update(id: string, updateDto: UpdateScontrinoDto) {
		const existing = await this.findOne(id);
		if (!existing) throw new NotFoundException();
		this.repo.merge(existing, updateDto);
		return this.repo.save(existing);
	}

	remove(id: string) {
		return this.repo.delete(id);
	}

	async getExpensesFor(scontrino_id: string): Promise<ExpenseResponseDto[]> {
		return plainToInstance(ExpenseResponseDto, await this.repoExpense.find({
			where: { scontrino_id },
			relations: ['product']
		}));
	}

	async getLastExpenseAt(store_id: string): Promise<ScontrinoResponseDto> {
		return plainToInstance(
			ScontrinoResponseDto,
			await this.repo.findOne({
				where: { market_store_id: store_id },
				order: { buy_date: 'DESC' }
			})
		);
	}

	async getExpensesAt(store_id: string): Promise<ScontrinoResponseDto[]> {
		return plainToInstance(
			ScontrinoResponseDto,
			await this.repo.find({
				where: { market_store_id: store_id },
				order: { buy_date: 'DESC' }
			})
		);
	}

	async getAllSpentAt(store_id: string) {
		return {
			total: await this.repo.sum('total', {
				market_store_id: store_id,
			})
		};
	}
}

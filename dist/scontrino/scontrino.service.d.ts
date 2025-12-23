import { CreateScontrinoDto } from './dto/create-scontrino.dto';
import { UpdateScontrinoDto } from './dto/update-scontrino.dto';
import { Scontrino } from './entities/scontrino.entity';
import { Repository } from 'typeorm';
import { ScontrinoResponseDto } from './dto/response.scontrino.dto';
import { ExpenseResponseDto } from 'src/expense/dto/response.expense.dto';
import { Expense } from 'src/expense/entities/expense.entity';
export declare class ScontrinoService {
    private repo;
    private repoExpense;
    constructor(repo: Repository<Scontrino>, repoExpense: Repository<Expense>);
    create(createDto: CreateScontrinoDto): Promise<ScontrinoResponseDto>;
    findAll(): Promise<ScontrinoResponseDto[]>;
    findOne(id: string): Promise<ScontrinoResponseDto>;
    update(id: string, updateDto: UpdateScontrinoDto): Promise<ScontrinoResponseDto & Scontrino>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    getExpensesFor(scontrino_id: string): Promise<ExpenseResponseDto[]>;
    getLastExpenseAt(store_id: string): Promise<ScontrinoResponseDto>;
    getExpensesAt(store_id: string): Promise<ScontrinoResponseDto[]>;
    getAllSpentAt(store_id: string): Promise<{
        total: number | null;
    }>;
}

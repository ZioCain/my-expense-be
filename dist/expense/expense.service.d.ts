import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';
import { Repository } from 'typeorm';
import { ExpenseResponseDto } from './dto/response.expense.dto';
export declare class ExpenseService {
    private repo;
    constructor(repo: Repository<Expense>);
    create(createExpenseDto: CreateExpenseDto): Promise<ExpenseResponseDto>;
    findAll(): Promise<ExpenseResponseDto[]>;
    findOne(id: string): Promise<Expense | null>;
    update(id: string, updateDto: UpdateExpenseDto): Promise<Expense>;
    remove(id: string): void;
    getForProduct(product_id: string): Promise<Expense[]>;
}

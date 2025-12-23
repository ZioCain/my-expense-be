import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { ExpenseResponseDto } from './dto/response.expense.dto';
export declare class ExpenseController {
    private readonly expenseService;
    constructor(expenseService: ExpenseService);
    create(createExpenseDto: CreateExpenseDto): Promise<ExpenseResponseDto>;
    findAll(): Promise<ExpenseResponseDto[]>;
    findOne(id: string): Promise<import("./entities/expense.entity").Expense | null>;
    update(id: string, updateExpenseDto: UpdateExpenseDto): Promise<import("./entities/expense.entity").Expense>;
    remove(id: string): void;
    getForProduct(id: string): Promise<ExpenseResponseDto[]>;
}

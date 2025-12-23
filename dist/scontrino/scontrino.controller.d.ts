import { ScontrinoService } from './scontrino.service';
import { CreateScontrinoDto } from './dto/create-scontrino.dto';
import { UpdateScontrinoDto } from './dto/update-scontrino.dto';
import { ExpenseResponseDto } from 'src/expense/dto/response.expense.dto';
export declare class ScontrinoController {
    private readonly scontrinoService;
    constructor(scontrinoService: ScontrinoService);
    create(createScontrinoDto: CreateScontrinoDto): Promise<import("./dto/response.scontrino.dto").ScontrinoResponseDto>;
    findAll(): Promise<import("./dto/response.scontrino.dto").ScontrinoResponseDto[]>;
    findOne(id: string): Promise<import("./dto/response.scontrino.dto").ScontrinoResponseDto>;
    update(id: string, updateScontrinoDto: UpdateScontrinoDto): Promise<import("./dto/response.scontrino.dto").ScontrinoResponseDto & import("./entities/scontrino.entity").Scontrino>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    getExpenses(id: string): Promise<ExpenseResponseDto[]>;
    getLastExpenseAt(store_id: string): Promise<import("./dto/response.scontrino.dto").ScontrinoResponseDto>;
    getExpensesAt(store_id: string): Promise<import("./dto/response.scontrino.dto").ScontrinoResponseDto[]>;
    getAllSpentAt(store_id: string): Promise<{
        total: number | null;
    }>;
}

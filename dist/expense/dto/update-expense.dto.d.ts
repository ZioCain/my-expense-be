import { CreateExpenseDto } from './create-expense.dto';
declare const UpdateExpenseDto_base: import("@nestjs/common").Type<Partial<CreateExpenseDto>>;
export declare class UpdateExpenseDto extends UpdateExpenseDto_base {
    readonly price: number;
    readonly discount: number;
    product_id: string;
    scontrino_id: string;
}
export {};

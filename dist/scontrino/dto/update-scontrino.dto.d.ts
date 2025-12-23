import { CreateScontrinoDto } from './create-scontrino.dto';
declare const UpdateScontrinoDto_base: import("@nestjs/common").Type<Partial<CreateScontrinoDto>>;
export declare class UpdateScontrinoDto extends UpdateScontrinoDto_base {
    readonly buy_date: Date;
    readonly market_store_id: string;
    readonly total: number;
}
export {};

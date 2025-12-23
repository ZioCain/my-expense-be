import { Product } from 'src/product/entities/product.entity';
import { Scontrino } from 'src/scontrino/entities/scontrino.entity';
export declare class ExpenseResponseDto {
    id: string;
    product_id: string;
    scontrino_id: string;
    product: Product;
    price: number;
    discount: number;
    scontrino: Scontrino;
}

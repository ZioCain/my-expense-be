import { Product } from "src/product/entities/product.entity";
import { Scontrino } from "src/scontrino/entities/scontrino.entity";
export declare class Expense {
    id: string;
    price: number;
    discount: number;
    scontrino_id: string;
    product_id: string;
    scontrino: Scontrino;
    product: Product;
}

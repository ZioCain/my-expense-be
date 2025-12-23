import { Expense } from "src/expense/entities/expense.entity";
import { ProductBrand } from "src/product-brand/entities/product-brand.entity";
import { ProductTag } from "src/product-tag/entities/product-tag.entity";
export declare class Product {
    id: string;
    name: string;
    image: string;
    barcode: string;
    product_brand_id: string;
    productBrand: ProductBrand;
    tags: ProductTag[];
    expenses: Expense[];
}

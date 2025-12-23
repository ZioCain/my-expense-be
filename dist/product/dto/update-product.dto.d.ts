import { CreateProductDto } from './create-product.dto';
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    readonly name: string;
    readonly image?: string;
    readonly barcode?: string;
    readonly product_brand_id?: string;
}
export {};

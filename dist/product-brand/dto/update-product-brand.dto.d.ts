import { CreateProductBrandDto } from './create-product-brand.dto';
declare const UpdateProductBrandDto_base: import("@nestjs/common").Type<Partial<CreateProductBrandDto>>;
export declare class UpdateProductBrandDto extends UpdateProductBrandDto_base {
    readonly name: string;
    readonly logo: string;
}
export {};

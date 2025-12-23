import { CreateMarketBrandDto } from './create-market-brand.dto';
declare const UpdateMarketBrandDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMarketBrandDto>>;
export declare class UpdateMarketBrandDto extends UpdateMarketBrandDto_base {
    readonly name: string;
    readonly logo: string;
}
export {};

import { CreateMarketStoreDto } from './create-market-store.dto';
declare const UpdateMarketStoreDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMarketStoreDto>>;
export declare class UpdateMarketStoreDto extends UpdateMarketStoreDto_base {
    readonly address?: string | undefined;
    readonly latitudine?: number | undefined;
    readonly longitudine?: number | undefined;
    readonly market_brand_id?: string | undefined;
}
export {};

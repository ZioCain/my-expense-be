import { MarketBrand } from 'src/market-brand/entities/market-brand.entity';
import { Scontrino } from 'src/scontrino/entities/scontrino.entity';
export declare class MarketStoreResponseDto {
    id: string;
    name: string;
    address: string;
    latitudine: number;
    longitudine: number;
    marketBrand: MarketBrand;
    market_brand_id: string;
    receipts: Scontrino[];
}

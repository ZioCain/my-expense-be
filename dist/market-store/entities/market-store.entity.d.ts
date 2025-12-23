import { MarketBrand } from "src/market-brand/entities/market-brand.entity";
import { Scontrino } from "src/scontrino/entities/scontrino.entity";
export declare class MarketStore {
    id: string;
    address: string;
    latitudine: number;
    longitudine: number;
    market_brand_id: string;
    marketBrand: MarketBrand;
    receipts: Scontrino[];
}

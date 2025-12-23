import { MarketStore } from '../../market-store/entities/market-store.entity';
export declare class MarketBrandResponseDto {
    id: string;
    name: string;
    logo: string;
    stores: MarketStore[];
}

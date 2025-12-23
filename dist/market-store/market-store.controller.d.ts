import { MarketStoreService } from './market-store.service';
import { CreateMarketStoreDto } from './dto/create-market-store.dto';
import { UpdateMarketStoreDto } from './dto/update-market-store.dto';
export declare class MarketStoreController {
    private readonly marketStoreService;
    constructor(marketStoreService: MarketStoreService);
    create(createMarketStoreDto: CreateMarketStoreDto): Promise<import("./dto/response.market-store.dto").MarketStoreResponseDto>;
    findAll(): Promise<import("./dto/response.market-store.dto").MarketStoreResponseDto[]>;
    findOne(id: string): Promise<import("./entities/market-store.entity").MarketStore | null>;
    update(id: string, updateMarketStoreDto: UpdateMarketStoreDto): Promise<import("./entities/market-store.entity").MarketStore>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

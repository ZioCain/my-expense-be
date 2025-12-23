import { CreateMarketStoreDto } from './dto/create-market-store.dto';
import { UpdateMarketStoreDto } from './dto/update-market-store.dto';
import { MarketStore } from './entities/market-store.entity';
import { Repository } from 'typeorm';
import { MarketStoreResponseDto } from './dto/response.market-store.dto';
export declare class MarketStoreService {
    private repo;
    constructor(repo: Repository<MarketStore>);
    create(createMarketStoreDto: CreateMarketStoreDto): Promise<MarketStoreResponseDto>;
    findAll(): Promise<MarketStoreResponseDto[]>;
    findOne(id: string): Promise<MarketStore | null>;
    update(id: string, updateDto: UpdateMarketStoreDto): Promise<MarketStore>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

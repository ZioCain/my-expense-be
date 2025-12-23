import { CreateMarketBrandDto } from './dto/create-market-brand.dto';
import { UpdateMarketBrandDto } from './dto/update-market-brand.dto';
import { MarketBrand } from './entities/market-brand.entity';
import { DeleteResult, Repository } from 'typeorm';
import { MarketBrandResponseDto } from 'src/market-brand/dto/response.market-brand.dto';
export declare class MarketBrandService {
    private repo;
    constructor(repo: Repository<MarketBrand>);
    create(createMarketBrandDto: CreateMarketBrandDto): Promise<MarketBrandResponseDto>;
    findAll(): Promise<MarketBrand[]>;
    findOne(id: string): Promise<MarketBrand | null>;
    update(id: string, updateDto: UpdateMarketBrandDto): Promise<MarketBrand>;
    remove(id: string): Promise<DeleteResult>;
}

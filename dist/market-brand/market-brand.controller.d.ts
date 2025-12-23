import { MarketBrandService } from './market-brand.service';
import { CreateMarketBrandDto } from './dto/create-market-brand.dto';
import { UpdateMarketBrandDto } from './dto/update-market-brand.dto';
import { MarketBrandResponseDto } from './dto/response.market-brand.dto';
import { MarketBrand } from './entities/market-brand.entity';
export declare class MarketBrandController {
    private readonly marketBrandService;
    constructor(marketBrandService: MarketBrandService);
    create(createMarketBrandDto: CreateMarketBrandDto): Promise<MarketBrandResponseDto>;
    findAll(): Promise<MarketBrand[]>;
    findOne(id: string): Promise<MarketBrand | null>;
    update(id: string, updateMarketBrandDto: UpdateMarketBrandDto): Promise<MarketBrand>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

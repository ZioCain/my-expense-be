import { Injectable } from '@nestjs/common';
import { CreateMarketBrandDto } from './dto/create-market-brand.dto';
import { UpdateMarketBrandDto } from './dto/update-market-brand.dto';
import { MarketBrand } from './entities/market-brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { MarketBrandResponseDto } from 'src/market-brand/dto/response.market-brand.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class MarketBrandService {
	constructor(
		@InjectRepository(MarketBrand)
		private marketBrandRepository: Repository<MarketBrand>,
	) { }

	async create(createMarketBrandDto: CreateMarketBrandDto) : Promise<MarketBrandResponseDto>{
		const ent = await this.marketBrandRepository.insert(createMarketBrandDto);
		return plainToInstance(MarketBrandResponseDto, ent.raw, {
			excludeExtraneousValues: true,
		});
	}

	async findAll(): Promise<MarketBrand[]> {
		return plainToInstance(MarketBrandResponseDto, await this.marketBrandRepository.find());
	}

	async findOne(id: string): Promise<MarketBrand | null> {
		const ent = await this.marketBrandRepository.findOneBy({ id });
		return plainToInstance(MarketBrandResponseDto, ent);
	}

	update(id: string, updateMarketBrandDto: UpdateMarketBrandDto) : Promise<UpdateResult> {
		return this.marketBrandRepository.update(id, updateMarketBrandDto);
	}

	remove(id: string) : Promise<DeleteResult> {
		return this.marketBrandRepository.delete(id);
	}
}

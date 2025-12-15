import { Injectable, NotFoundException } from '@nestjs/common';
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
		private repo: Repository<MarketBrand>,
	) { }

	async create(createMarketBrandDto: CreateMarketBrandDto) : Promise<MarketBrandResponseDto>{
		const ent = this.repo.save(this.repo.create(createMarketBrandDto));
		return plainToInstance(MarketBrandResponseDto, ent, {
			excludeExtraneousValues: true,
		});
	}

	async findAll(): Promise<MarketBrand[]> {
		return plainToInstance(MarketBrandResponseDto, await this.repo.find());
	}

	async findOne(id: string): Promise<MarketBrand | null> {
		const ent = await this.repo.findOne({
			where: {id},
			relations: ['stores'],
		});
		return plainToInstance(MarketBrandResponseDto, ent);
	}

	async update(id: string, updateDto: UpdateMarketBrandDto) : Promise<MarketBrand> {
		const existing = await this.findOne(id);
		if(!existing) throw new NotFoundException();
		this.repo.merge(existing, updateDto);
		return this.repo.save(existing);
	}

	remove(id: string) : Promise<DeleteResult> {
		return this.repo.delete(id);
	}
}

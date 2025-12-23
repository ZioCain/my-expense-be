import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMarketStoreDto } from './dto/create-market-store.dto';
import { UpdateMarketStoreDto } from './dto/update-market-store.dto';
import { MarketStore } from './entities/market-store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { MarketStoreResponseDto } from './dto/response.market-store.dto';

@Injectable()
export class MarketStoreService {
	constructor(
		@InjectRepository(MarketStore)
		private repo: Repository<MarketStore>,
	){}

	async create(createMarketStoreDto: CreateMarketStoreDto) : Promise<MarketStoreResponseDto> {
		return plainToInstance( MarketStoreResponseDto, await this.repo.save(this.repo.create(createMarketStoreDto)) );
	}

	async findAll() : Promise<MarketStoreResponseDto[]> {
		return plainToInstance(MarketStoreResponseDto, await this.repo.find({
			relations: ['marketBrand']
		}));
	}

	async findOne(id: string) : Promise<MarketStore | null> {
		return plainToInstance(MarketStoreResponseDto, await this.repo.findOne({
			where: {id},
			relations: ['marketBrand', 'receipts']
		}));
	}

	async update(id: string, updateDto: UpdateMarketStoreDto) {
		const existing = await this.findOne(id);
		if(!existing) throw new NotFoundException();
		this.repo.merge(existing, updateDto);
		return this.repo.save(existing);
	}

	remove(id: string) {
		return this.repo.delete(id);
	}
}

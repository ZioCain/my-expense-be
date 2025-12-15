import { Injectable } from '@nestjs/common';
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
		return plainToInstance( MarketStoreResponseDto, (await this.repo.insert(createMarketStoreDto)).raw );
	}

	async findAll() : Promise<MarketStoreResponseDto[]> {
		return plainToInstance(MarketStoreResponseDto, await this.repo.find({
			relations: ['marketBrand']
		}));
	}

	async findOne(id: string) {
		return plainToInstance(MarketStoreResponseDto, await this.repo.findOne({
			where: {id},
			relations: ['marketBrand']
		}));
	}

	update(id: string, updateMarketStoreDto: UpdateMarketStoreDto) {
		return this.repo.update(id, updateMarketStoreDto);
	}

	remove(id: string) {
		return this.repo.delete(id);
	}
}

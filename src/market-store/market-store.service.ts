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
		private marketStoreRepository: Repository<MarketStore>,
	){}

	async create(createMarketStoreDto: CreateMarketStoreDto) : Promise<MarketStoreResponseDto> {
		return plainToInstance( MarketStoreResponseDto, (await this.marketStoreRepository.insert(createMarketStoreDto)).raw );
	}

	async findAll() : Promise<MarketStoreResponseDto[]> {
		return plainToInstance(MarketStoreResponseDto, await this.marketStoreRepository.find());
	}

	findOne(id: number) {
		return `This action returns a #${id} marketStore`;
	}

	update(id: number, updateMarketStoreDto: UpdateMarketStoreDto) {
		return `This action updates a #${id} marketStore`;
	}

	remove(id: number) {
		return `This action removes a #${id} marketStore`;
	}
}

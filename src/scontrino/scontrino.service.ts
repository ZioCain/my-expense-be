import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateScontrinoDto } from './dto/create-scontrino.dto';
import { UpdateScontrinoDto } from './dto/update-scontrino.dto';
import { Scontrino } from './entities/scontrino.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { ScontrinoResponseDto } from './dto/response.scontrino.dto';

@Injectable()
export class ScontrinoService {
	constructor(
		@InjectRepository(Scontrino)
		private repo: Repository<Scontrino>,
	){}

	async create(createDto: CreateScontrinoDto) {
		return plainToInstance( ScontrinoResponseDto, await this.repo.save(this.repo.create(createDto)) );
	}

	async findAll() {
		return plainToInstance(ScontrinoResponseDto, await this.repo.find());
	}

	async findOne(id: string) {
		return plainToInstance(ScontrinoResponseDto, await this.repo.findOne({
			where: {id},
			relations: ['expenses']
		}));
	}

	async update(id: string, updateDto: UpdateScontrinoDto) {
		const existing = await this.findOne(id);
		if(!existing) throw new NotFoundException();
		this.repo.merge(existing, updateDto);
		return this.repo.save(existing);
	}

	remove(id: string) {
		return this.repo.delete(id);
	}
}

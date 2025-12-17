import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductTagDto } from './dto/create-product-tag.dto';
import { UpdateProductTagDto } from './dto/update-product-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductTag } from './entities/product-tag.entity';
import { ProductTagResponseDto } from './dto/response.product-tag.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ProductTagService {
	constructor(
		@InjectRepository(ProductTag)
		private repo: Repository<ProductTag>,
	) { }

	async create(createProductTagDto: CreateProductTagDto) {
		const ent = await this.repo.save(this.repo.create(createProductTagDto));
		return plainToInstance(ProductTagResponseDto, ent, {
			excludeExtraneousValues: true,
		});
	}

	async findAll() {
		return plainToInstance(ProductTagResponseDto, await this.repo.find());
	}

	async findOne(id: string) : Promise<ProductTag | null> {
		const ent = await this.repo.findOne({
			where: {id},
			relations: ['products'],
		});
		return plainToInstance(ProductTagResponseDto, ent);
	}

	async update(id: string, updateDto: UpdateProductTagDto) {
		const existing = await this.findOne(id);
		if(!existing) throw new NotFoundException();
		this.repo.merge(existing, updateDto);
		return this.repo.save(existing);
	}

	remove(id: string) {
		return this.repo.delete(id);
	}
}

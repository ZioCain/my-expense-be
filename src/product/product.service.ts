import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { plainToInstance } from 'class-transformer';
import { ProductResponseDto } from './dto/response.product.dto';

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(Product)
		private repo: Repository<Product>,
	) { }

	async create(createProductDto: CreateProductDto) {
		const ent = await this.repo.save(this.repo.create(createProductDto));
		return plainToInstance(ProductResponseDto, ent, {
			excludeExtraneousValues: true,
		});
	}

	async findAll() {
		return plainToInstance(ProductResponseDto, await this.repo.find());
	}

	async findOne(id: string) :Promise<Product | null> {
		const ent = await this.repo.findOne({
			where: {id},
			relations: ['productBrand', 'tags'],
		});
		return plainToInstance(ProductResponseDto, ent);
	}

	async update(id: string, updateDto: UpdateProductDto) {
		const existing = await this.findOne(id);
		if(!existing) throw new NotFoundException();
		this.repo.merge(existing, updateDto);
		return this.repo.save(existing);
	}

	remove(id: string) {
		return this.repo.delete(id);
	}
}

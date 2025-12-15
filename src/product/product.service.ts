import { Injectable } from '@nestjs/common';
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
		const ent = await this.repo.insert(createProductDto);
		return plainToInstance(ProductResponseDto, ent.raw, {
			excludeExtraneousValues: true,
		});
	}

	async findAll() {
		return plainToInstance(ProductResponseDto, await this.repo.find());
	}

	async findOne(id: string) {
		const ent = await this.repo.findOne({
			where: {id},
			relations: ['productBrand', 'tags'],
		});
		return plainToInstance(ProductResponseDto, ent);
	}

	update(id: string, updateProductDto: UpdateProductDto) {
		return this.repo.update(id, updateProductDto);
	}

	remove(id: string) {
		return this.repo.delete(id);
	}
}

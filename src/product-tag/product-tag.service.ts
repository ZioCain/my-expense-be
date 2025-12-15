import { Injectable } from '@nestjs/common';
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
		const ent = await this.repo.insert(createProductTagDto);
		return plainToInstance(ProductTagResponseDto, ent.raw, {
			excludeExtraneousValues: true,
		});
	}

	async findAll() {
		return plainToInstance(ProductTagResponseDto, await this.repo.find());
	}

	async findOne(id: string) {
		const ent = await this.repo.findOne({
			where: {id},
			relations: ['stores'],
		});
		return plainToInstance(ProductTagResponseDto, ent);
	}

	update(id: string, updateProductTagDto: UpdateProductTagDto) {
		return this.repo.update(id, updateProductTagDto);
	}

	remove(id: string) {
		return this.repo.delete(id);
	}
}

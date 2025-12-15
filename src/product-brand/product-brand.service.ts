import { Injectable } from '@nestjs/common';
import { CreateProductBrandDto } from './dto/create-product-brand.dto';
import { UpdateProductBrandDto } from './dto/update-product-brand.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductBrand } from './entities/product-brand.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { ProductBrandResponseDto } from './dto/response.product-brand.dto';

@Injectable()
export class ProductBrandService {
	constructor(
		@InjectRepository(ProductBrand)
		private repo: Repository<ProductBrand>,
	){}

	async create(createProductBrandDto: CreateProductBrandDto) {
		const ent = await this.repo.insert(createProductBrandDto);
		return plainToInstance(ProductBrandResponseDto, ent.raw, {
			excludeExtraneousValues: true,
		});
	}

	async findAll() {
		return plainToInstance(ProductBrandResponseDto, await this.repo.find());
	}

	async findOne(id: string) {
		const ent = await this.repo.findOne({
			where: {id},
			relations: ['stores'],
		});
		return plainToInstance(ProductBrandResponseDto, ent);
	}

	update(id: string, updateProductBrandDto: UpdateProductBrandDto) {
		return this.repo.update(id, updateProductBrandDto);
	}

	remove(id: string) {
		return this.repo.delete(id);
	}
}

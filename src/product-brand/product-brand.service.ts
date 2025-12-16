import { Injectable, NotFoundException } from '@nestjs/common';
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
		const ent = await this.repo.save(this.repo.create(createProductBrandDto));
		return plainToInstance(ProductBrandResponseDto, ent, {
			excludeExtraneousValues: true,
		});
	}

	async findAll() {
		return plainToInstance(ProductBrandResponseDto, await this.repo.find());
	}

	async findOne(id: string) :Promise<ProductBrand | null>{
		const ent = await this.repo.findOne({
			where: {id},
			relations: ['products'],
		});
		return plainToInstance(ProductBrandResponseDto, ent);
	}

	async update(id: string, updateDto: UpdateProductBrandDto) :Promise<ProductBrand> {
		const existing = await this.findOne(id);
		if(!existing) throw new NotFoundException();
		this.repo.merge(existing, updateDto);
		return this.repo.save(existing);
	}

	remove(id: string) {
		return this.repo.delete(id);
	}
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductTagLinkDto } from './dto/create-product-tag-link.dto';
import { ProductTagLink } from './entities/product-tag-link.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductTagLinkService {
	constructor(
		@InjectRepository(ProductTagLink)
		private repo: Repository<ProductTagLink>,
	) { }

	create(createProductTagLinkDto: CreateProductTagLinkDto) {
		const link = this.repo.create(createProductTagLinkDto);
		return this.repo.save(link);
	}

	async findTagsByProductId(productId: string): Promise<ProductTagLink[]> {
		// Finds all link entities for a given product ID, loading the related ProductTag object
		return this.repo.find({
			where: { product_id: productId },
			relations: ['productTag'],
			select: ['productTag'] // Optionally select only the tag data for efficiency
		});
	}

	// GET: /product-tag-link/tag/{uuid}
	async findProductsByTagId(tagId: string): Promise<ProductTagLink[]> {
		// Finds all link entities for a given tag ID, loading the related Product object
		return this.repo.find({
			where: { product_tag_id: tagId },
			relations: ['product'],
			select: ['product'] // Optionally select only the product data
		});
	}

	async deleteByKeys(productId: string, tagId: string): Promise<void> {
		// 1. Find the link first to verify it exists. This is good practice
		//    for providing meaningful feedback (404 Not Found).
		const linkToDelete = await this.repo.findOne({
		where: {
			product_id: productId,
			product_tag_id: tagId
		},
		});

		if (!linkToDelete) {
			throw new NotFoundException(
				`Link not found for Product ID: ${productId} and Tag ID: ${tagId}`,
			);
		}

		// 2. Perform the actual deletion.
		// We can use the remove method with the entity object found above
		await this.repo.remove(linkToDelete);
	}
}

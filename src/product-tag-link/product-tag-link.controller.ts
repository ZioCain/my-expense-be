import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductTagLinkService } from './product-tag-link.service';
import { CreateProductTagLinkDto } from './dto/create-product-tag-link.dto';

@Controller('product-tag-link')
export class ProductTagLinkController {
	constructor(private readonly productTagLinkService: ProductTagLinkService) { }

	@Post()
	create(@Body() createProductTagLinkDto: CreateProductTagLinkDto) {
		return this.productTagLinkService.create(createProductTagLinkDto);
	}

	@Get('product/:id')
	async findTagsByProductId(@Param('id') productId: string) {
		// The service returns the links, you might want to map it to just the tags here
		const links = await this.productTagLinkService.findTagsByProductId(productId);
		return links.map(link => link.productTag);
	}

	// 3. GET product-tag-link/tag/{uuid}
	@Get('tag/:id')
	async findProductsByTagId(@Param('id') tagId: string) {
		// The service returns the links, map it to just the products here
		const links = await this.productTagLinkService.findProductsByTagId(tagId);
		return links.map(link => link.product);
	}

	@Delete(':productId/:tagId')
	remove(@Param('productId') productId: string, @Param('tagId') tagId: string) {
		return this.productTagLinkService.deleteByKeys(productId, tagId);
	}
}

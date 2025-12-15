import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductTagLinkService } from './product-tag-link.service';
import { CreateProductTagLinkDto } from './dto/create-product-tag-link.dto';
import { UpdateProductTagLinkDto } from './dto/update-product-tag-link.dto';

@Controller('product-tag-link')
export class ProductTagLinkController {
  constructor(private readonly productTagLinkService: ProductTagLinkService) {}

  @Post()
  create(@Body() createProductTagLinkDto: CreateProductTagLinkDto) {
    return this.productTagLinkService.create(createProductTagLinkDto);
  }

  @Get()
  findAll() {
    return this.productTagLinkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productTagLinkService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductTagLinkDto: UpdateProductTagLinkDto) {
    return this.productTagLinkService.update(id, updateProductTagLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productTagLinkService.remove(id);
  }
}

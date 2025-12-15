import { Injectable } from '@nestjs/common';
import { CreateProductTagLinkDto } from './dto/create-product-tag-link.dto';
import { UpdateProductTagLinkDto } from './dto/update-product-tag-link.dto';

@Injectable()
export class ProductTagLinkService {
  create(createProductTagLinkDto: CreateProductTagLinkDto) {
    return 'This action adds a new productTagLink';
  }

  findAll() {
    return `This action returns all productTagLink`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productTagLink`;
  }

  update(id: number, updateProductTagLinkDto: UpdateProductTagLinkDto) {
    return `This action updates a #${id} productTagLink`;
  }

  remove(id: number) {
    return `This action removes a #${id} productTagLink`;
  }
}

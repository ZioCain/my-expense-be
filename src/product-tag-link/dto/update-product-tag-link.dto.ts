import { PartialType } from '@nestjs/swagger';
import { CreateProductTagLinkDto } from './create-product-tag-link.dto';

export class UpdateProductTagLinkDto extends PartialType(CreateProductTagLinkDto) {}

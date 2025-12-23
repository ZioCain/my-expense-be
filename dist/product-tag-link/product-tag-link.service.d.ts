import { CreateProductTagLinkDto } from './dto/create-product-tag-link.dto';
import { ProductTagLink } from './entities/product-tag-link.entity';
import { Repository } from 'typeorm';
export declare class ProductTagLinkService {
    private repo;
    constructor(repo: Repository<ProductTagLink>);
    create(createProductTagLinkDto: CreateProductTagLinkDto): Promise<ProductTagLink>;
    findTagsByProductId(productId: string): Promise<ProductTagLink[]>;
    findProductsByTagId(tagId: string): Promise<ProductTagLink[]>;
    deleteByKeys(productId: string, tagId: string): Promise<void>;
}

import { ProductTagLinkService } from './product-tag-link.service';
import { CreateProductTagLinkDto } from './dto/create-product-tag-link.dto';
export declare class ProductTagLinkController {
    private readonly productTagLinkService;
    constructor(productTagLinkService: ProductTagLinkService);
    create(createProductTagLinkDto: CreateProductTagLinkDto): Promise<import("./entities/product-tag-link.entity").ProductTagLink>;
    findTagsByProductId(productId: string): Promise<import("../product-tag/entities/product-tag.entity").ProductTag[]>;
    findProductsByTagId(tagId: string): Promise<import("../product/entities/product.entity").Product[]>;
    remove(productId: string, tagId: string): Promise<void>;
}

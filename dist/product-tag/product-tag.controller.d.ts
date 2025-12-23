import { ProductTagService } from './product-tag.service';
import { CreateProductTagDto } from './dto/create-product-tag.dto';
import { UpdateProductTagDto } from './dto/update-product-tag.dto';
export declare class ProductTagController {
    private readonly productTagService;
    constructor(productTagService: ProductTagService);
    create(createProductTagDto: CreateProductTagDto): Promise<import("./dto/response.product-tag.dto").ProductTagResponseDto>;
    findAll(): Promise<import("./dto/response.product-tag.dto").ProductTagResponseDto[]>;
    findOne(id: string): Promise<import("./entities/product-tag.entity").ProductTag | null>;
    update(id: string, updateProductTagDto: UpdateProductTagDto): Promise<import("./entities/product-tag.entity").ProductTag>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

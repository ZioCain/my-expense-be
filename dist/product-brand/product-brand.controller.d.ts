import { ProductBrandService } from './product-brand.service';
import { CreateProductBrandDto } from './dto/create-product-brand.dto';
import { UpdateProductBrandDto } from './dto/update-product-brand.dto';
export declare class ProductBrandController {
    private readonly productBrandService;
    constructor(productBrandService: ProductBrandService);
    create(createProductBrandDto: CreateProductBrandDto): Promise<import("./dto/response.product-brand.dto").ProductBrandResponseDto>;
    findAll(): Promise<import("./dto/response.product-brand.dto").ProductBrandResponseDto[]>;
    findOne(id: string): Promise<import("./entities/product-brand.entity").ProductBrand | null>;
    update(id: string, updateProductBrandDto: UpdateProductBrandDto): Promise<import("./entities/product-brand.entity").ProductBrand>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

import { CreateProductBrandDto } from './dto/create-product-brand.dto';
import { UpdateProductBrandDto } from './dto/update-product-brand.dto';
import { ProductBrand } from './entities/product-brand.entity';
import { Repository } from 'typeorm';
import { ProductBrandResponseDto } from './dto/response.product-brand.dto';
export declare class ProductBrandService {
    private repo;
    constructor(repo: Repository<ProductBrand>);
    create(createProductBrandDto: CreateProductBrandDto): Promise<ProductBrandResponseDto>;
    findAll(): Promise<ProductBrandResponseDto[]>;
    findOne(id: string): Promise<ProductBrand | null>;
    update(id: string, updateDto: UpdateProductBrandDto): Promise<ProductBrand>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductResponseDto } from './dto/response.product.dto';
export declare class ProductService {
    private repo;
    constructor(repo: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<ProductResponseDto>;
    findAll(): Promise<ProductResponseDto[]>;
    findOne(id: string): Promise<Product | null>;
    update(id: string, updateDto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

import { CreateProductTagDto } from './dto/create-product-tag.dto';
import { UpdateProductTagDto } from './dto/update-product-tag.dto';
import { Repository } from 'typeorm';
import { ProductTag } from './entities/product-tag.entity';
import { ProductTagResponseDto } from './dto/response.product-tag.dto';
export declare class ProductTagService {
    private repo;
    constructor(repo: Repository<ProductTag>);
    create(createProductTagDto: CreateProductTagDto): Promise<ProductTagResponseDto>;
    findAll(): Promise<ProductTagResponseDto[]>;
    findOne(id: string): Promise<ProductTag | null>;
    update(id: string, updateDto: UpdateProductTagDto): Promise<ProductTag>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}

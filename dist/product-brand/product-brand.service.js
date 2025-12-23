"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBrandService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_brand_entity_1 = require("./entities/product-brand.entity");
const typeorm_2 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const response_product_brand_dto_1 = require("./dto/response.product-brand.dto");
let ProductBrandService = class ProductBrandService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(createProductBrandDto) {
        const ent = await this.repo.save(this.repo.create(createProductBrandDto));
        return (0, class_transformer_1.plainToInstance)(response_product_brand_dto_1.ProductBrandResponseDto, ent, {
            excludeExtraneousValues: true,
        });
    }
    async findAll() {
        return (0, class_transformer_1.plainToInstance)(response_product_brand_dto_1.ProductBrandResponseDto, await this.repo.find());
    }
    async findOne(id) {
        const ent = await this.repo.findOne({
            where: { id },
            relations: ['products'],
        });
        return (0, class_transformer_1.plainToInstance)(response_product_brand_dto_1.ProductBrandResponseDto, ent);
    }
    async update(id, updateDto) {
        const existing = await this.findOne(id);
        if (!existing)
            throw new common_1.NotFoundException();
        this.repo.merge(existing, updateDto);
        return this.repo.save(existing);
    }
    remove(id) {
        return this.repo.delete(id);
    }
};
exports.ProductBrandService = ProductBrandService;
exports.ProductBrandService = ProductBrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_brand_entity_1.ProductBrand)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductBrandService);
//# sourceMappingURL=product-brand.service.js.map
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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const class_transformer_1 = require("class-transformer");
const response_product_dto_1 = require("./dto/response.product.dto");
let ProductService = class ProductService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(createProductDto) {
        const ent = await this.repo.save(this.repo.create(createProductDto));
        return (0, class_transformer_1.plainToInstance)(response_product_dto_1.ProductResponseDto, ent, {
            excludeExtraneousValues: true,
        });
    }
    async findAll() {
        return (0, class_transformer_1.plainToInstance)(response_product_dto_1.ProductResponseDto, await this.repo.find({
            relations: ['productBrand']
        }));
    }
    async findOne(id) {
        const ent = await this.repo.findOne({
            where: { id },
            relations: ['productBrand', 'tags'],
        });
        return (0, class_transformer_1.plainToInstance)(response_product_dto_1.ProductResponseDto, ent);
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
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
//# sourceMappingURL=product.service.js.map
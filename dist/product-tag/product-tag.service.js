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
exports.ProductTagService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_tag_entity_1 = require("./entities/product-tag.entity");
const response_product_tag_dto_1 = require("./dto/response.product-tag.dto");
const class_transformer_1 = require("class-transformer");
let ProductTagService = class ProductTagService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(createProductTagDto) {
        const ent = await this.repo.save(this.repo.create(createProductTagDto));
        return (0, class_transformer_1.plainToInstance)(response_product_tag_dto_1.ProductTagResponseDto, ent, {
            excludeExtraneousValues: true,
        });
    }
    async findAll() {
        return (0, class_transformer_1.plainToInstance)(response_product_tag_dto_1.ProductTagResponseDto, await this.repo.find());
    }
    async findOne(id) {
        const ent = await this.repo.findOne({
            where: { id },
            relations: ['products'],
        });
        return (0, class_transformer_1.plainToInstance)(response_product_tag_dto_1.ProductTagResponseDto, ent);
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
exports.ProductTagService = ProductTagService;
exports.ProductTagService = ProductTagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_tag_entity_1.ProductTag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductTagService);
//# sourceMappingURL=product-tag.service.js.map
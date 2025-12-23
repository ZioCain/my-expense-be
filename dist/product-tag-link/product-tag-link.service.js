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
exports.ProductTagLinkService = void 0;
const common_1 = require("@nestjs/common");
const product_tag_link_entity_1 = require("./entities/product-tag-link.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ProductTagLinkService = class ProductTagLinkService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    create(createProductTagLinkDto) {
        const link = this.repo.create(createProductTagLinkDto);
        return this.repo.save(link);
    }
    async findTagsByProductId(productId) {
        return this.repo.find({
            where: { product_id: productId },
            relations: ['productTag'],
            select: ['productTag']
        });
    }
    async findProductsByTagId(tagId) {
        return this.repo.find({
            where: { product_tag_id: tagId },
            relations: ['product'],
            select: ['product']
        });
    }
    async deleteByKeys(productId, tagId) {
        const linkToDelete = await this.repo.findOne({
            where: {
                product_id: productId,
                product_tag_id: tagId
            },
        });
        if (!linkToDelete) {
            throw new common_1.NotFoundException(`Link not found for Product ID: ${productId} and Tag ID: ${tagId}`);
        }
        await this.repo.remove(linkToDelete);
    }
};
exports.ProductTagLinkService = ProductTagLinkService;
exports.ProductTagLinkService = ProductTagLinkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_tag_link_entity_1.ProductTagLink)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductTagLinkService);
//# sourceMappingURL=product-tag-link.service.js.map
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
exports.ProductTagLinkController = void 0;
const common_1 = require("@nestjs/common");
const product_tag_link_service_1 = require("./product-tag-link.service");
const create_product_tag_link_dto_1 = require("./dto/create-product-tag-link.dto");
let ProductTagLinkController = class ProductTagLinkController {
    productTagLinkService;
    constructor(productTagLinkService) {
        this.productTagLinkService = productTagLinkService;
    }
    create(createProductTagLinkDto) {
        return this.productTagLinkService.create(createProductTagLinkDto);
    }
    async findTagsByProductId(productId) {
        const links = await this.productTagLinkService.findTagsByProductId(productId);
        return links.map(link => link.productTag);
    }
    async findProductsByTagId(tagId) {
        const links = await this.productTagLinkService.findProductsByTagId(tagId);
        return links.map(link => link.product);
    }
    remove(productId, tagId) {
        return this.productTagLinkService.deleteByKeys(productId, tagId);
    }
};
exports.ProductTagLinkController = ProductTagLinkController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_tag_link_dto_1.CreateProductTagLinkDto]),
    __metadata("design:returntype", void 0)
], ProductTagLinkController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('product/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductTagLinkController.prototype, "findTagsByProductId", null);
__decorate([
    (0, common_1.Get)('tag/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductTagLinkController.prototype, "findProductsByTagId", null);
__decorate([
    (0, common_1.Delete)(':productId/:tagId'),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Param)('tagId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ProductTagLinkController.prototype, "remove", null);
exports.ProductTagLinkController = ProductTagLinkController = __decorate([
    (0, common_1.Controller)('product-tag-link'),
    __metadata("design:paramtypes", [product_tag_link_service_1.ProductTagLinkService])
], ProductTagLinkController);
//# sourceMappingURL=product-tag-link.controller.js.map
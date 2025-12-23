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
exports.ProductTagController = void 0;
const common_1 = require("@nestjs/common");
const product_tag_service_1 = require("./product-tag.service");
const create_product_tag_dto_1 = require("./dto/create-product-tag.dto");
const update_product_tag_dto_1 = require("./dto/update-product-tag.dto");
let ProductTagController = class ProductTagController {
    productTagService;
    constructor(productTagService) {
        this.productTagService = productTagService;
    }
    create(createProductTagDto) {
        return this.productTagService.create(createProductTagDto);
    }
    findAll() {
        return this.productTagService.findAll();
    }
    findOne(id) {
        return this.productTagService.findOne(id);
    }
    update(id, updateProductTagDto) {
        return this.productTagService.update(id, updateProductTagDto);
    }
    remove(id) {
        return this.productTagService.remove(id);
    }
};
exports.ProductTagController = ProductTagController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_tag_dto_1.CreateProductTagDto]),
    __metadata("design:returntype", void 0)
], ProductTagController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductTagController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductTagController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_tag_dto_1.UpdateProductTagDto]),
    __metadata("design:returntype", void 0)
], ProductTagController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductTagController.prototype, "remove", null);
exports.ProductTagController = ProductTagController = __decorate([
    (0, common_1.Controller)('product-tag'),
    __metadata("design:paramtypes", [product_tag_service_1.ProductTagService])
], ProductTagController);
//# sourceMappingURL=product-tag.controller.js.map
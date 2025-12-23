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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTagLink = void 0;
const product_tag_entity_1 = require("../../product-tag/entities/product-tag.entity");
const product_entity_1 = require("../../product/entities/product.entity");
const typeorm_1 = require("typeorm");
let ProductTagLink = class ProductTagLink {
    product_id;
    product;
    product_tag_id;
    productTag;
};
exports.ProductTagLink = ProductTagLink;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'uuid' }),
    __metadata("design:type", String)
], ProductTagLink.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", product_entity_1.Product)
], ProductTagLink.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'uuid' }),
    __metadata("design:type", String)
], ProductTagLink.prototype, "product_tag_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_tag_entity_1.ProductTag),
    (0, typeorm_1.JoinColumn)({ name: 'product_tag_id' }),
    __metadata("design:type", product_tag_entity_1.ProductTag)
], ProductTagLink.prototype, "productTag", void 0);
exports.ProductTagLink = ProductTagLink = __decorate([
    (0, typeorm_1.Entity)({ name: "product_tag_link" })
], ProductTagLink);
//# sourceMappingURL=product-tag-link.entity.js.map
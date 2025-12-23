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
exports.Product = void 0;
const expense_entity_1 = require("../../expense/entities/expense.entity");
const product_brand_entity_1 = require("../../product-brand/entities/product-brand.entity");
const product_tag_entity_1 = require("../../product-tag/entities/product-tag.entity");
const typeorm_1 = require("typeorm");
let Product = class Product {
    id;
    name;
    image;
    barcode;
    product_brand_id;
    productBrand;
    tags;
    expenses;
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "barcode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'product_brand_id' }),
    __metadata("design:type", String)
], Product.prototype, "product_brand_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_brand_entity_1.ProductBrand, (brand) => brand.products),
    (0, typeorm_1.JoinColumn)({ name: 'product_brand_id' }),
    __metadata("design:type", product_brand_entity_1.ProductBrand)
], Product.prototype, "productBrand", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => product_tag_entity_1.ProductTag, (tag) => tag.products),
    (0, typeorm_1.JoinTable)({
        name: 'product_tag_link',
        joinColumn: { name: 'product_id' },
        inverseJoinColumn: { name: 'product_tag_id' },
    }),
    __metadata("design:type", Array)
], Product.prototype, "tags", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => expense_entity_1.Expense, expense => expense.product),
    __metadata("design:type", Array)
], Product.prototype, "expenses", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)({ name: "product" })
], Product);
//# sourceMappingURL=product.entity.js.map
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
exports.ExpenseResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const product_entity_1 = require("../../product/entities/product.entity");
const scontrino_entity_1 = require("../../scontrino/entities/scontrino.entity");
class ExpenseResponseDto {
    id;
    product_id;
    scontrino_id;
    product;
    price;
    discount;
    scontrino;
}
exports.ExpenseResponseDto = ExpenseResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ExpenseResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ExpenseResponseDto.prototype, "product_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ExpenseResponseDto.prototype, "scontrino_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", product_entity_1.Product)
], ExpenseResponseDto.prototype, "product", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], ExpenseResponseDto.prototype, "price", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], ExpenseResponseDto.prototype, "discount", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", scontrino_entity_1.Scontrino)
], ExpenseResponseDto.prototype, "scontrino", void 0);
//# sourceMappingURL=response.expense.dto.js.map
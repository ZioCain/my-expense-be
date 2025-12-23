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
exports.ScontrinoResponseDto = void 0;
const class_transformer_1 = require("class-transformer");
const market_store_entity_1 = require("../../market-store/entities/market-store.entity");
class ScontrinoResponseDto {
    id;
    buy_date;
    total;
    marketStore;
    market_store_id;
    expenses;
}
exports.ScontrinoResponseDto = ScontrinoResponseDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ScontrinoResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], ScontrinoResponseDto.prototype, "buy_date", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], ScontrinoResponseDto.prototype, "total", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", market_store_entity_1.MarketStore)
], ScontrinoResponseDto.prototype, "marketStore", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], ScontrinoResponseDto.prototype, "market_store_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Array)
], ScontrinoResponseDto.prototype, "expenses", void 0);
//# sourceMappingURL=response.scontrino.dto.js.map
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
exports.MarketBrand = void 0;
const market_store_entity_1 = require("../../market-store/entities/market-store.entity");
const typeorm_1 = require("typeorm");
let MarketBrand = class MarketBrand {
    id;
    name;
    logo;
    stores;
};
exports.MarketBrand = MarketBrand;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], MarketBrand.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MarketBrand.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], MarketBrand.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => market_store_entity_1.MarketStore, marketStore => marketStore.marketBrand),
    __metadata("design:type", Array)
], MarketBrand.prototype, "stores", void 0);
exports.MarketBrand = MarketBrand = __decorate([
    (0, typeorm_1.Entity)({
        name: "market_brand",
    })
], MarketBrand);
//# sourceMappingURL=market-brand.entity.js.map
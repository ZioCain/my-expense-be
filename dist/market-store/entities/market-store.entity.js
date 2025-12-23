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
exports.MarketStore = void 0;
const market_brand_entity_1 = require("../../market-brand/entities/market-brand.entity");
const scontrino_entity_1 = require("../../scontrino/entities/scontrino.entity");
const typeorm_1 = require("typeorm");
let MarketStore = class MarketStore {
    id;
    address;
    latitudine;
    longitudine;
    market_brand_id;
    marketBrand;
    receipts;
};
exports.MarketStore = MarketStore;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], MarketStore.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MarketStore.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 6 }),
    __metadata("design:type", Number)
], MarketStore.prototype, "latitudine", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 6 }),
    __metadata("design:type", Number)
], MarketStore.prototype, "longitudine", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'market_brand_id' }),
    __metadata("design:type", String)
], MarketStore.prototype, "market_brand_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => market_brand_entity_1.MarketBrand, (brand) => brand.stores),
    (0, typeorm_1.JoinColumn)({ name: 'market_brand_id' }),
    __metadata("design:type", market_brand_entity_1.MarketBrand)
], MarketStore.prototype, "marketBrand", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => scontrino_entity_1.Scontrino, scontrino => scontrino.marketStore),
    __metadata("design:type", Array)
], MarketStore.prototype, "receipts", void 0);
exports.MarketStore = MarketStore = __decorate([
    (0, typeorm_1.Entity)({
        name: "market_store"
    })
], MarketStore);
//# sourceMappingURL=market-store.entity.js.map
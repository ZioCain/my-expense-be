"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketBrandModule = void 0;
const common_1 = require("@nestjs/common");
const market_brand_service_1 = require("./market-brand.service");
const market_brand_controller_1 = require("./market-brand.controller");
const typeorm_1 = require("@nestjs/typeorm");
const market_brand_entity_1 = require("./entities/market-brand.entity");
let MarketBrandModule = class MarketBrandModule {
};
exports.MarketBrandModule = MarketBrandModule;
exports.MarketBrandModule = MarketBrandModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([market_brand_entity_1.MarketBrand])],
        controllers: [market_brand_controller_1.MarketBrandController],
        providers: [market_brand_service_1.MarketBrandService],
    })
], MarketBrandModule);
//# sourceMappingURL=market-brand.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketStoreModule = void 0;
const common_1 = require("@nestjs/common");
const market_store_service_1 = require("./market-store.service");
const market_store_controller_1 = require("./market-store.controller");
const market_store_entity_1 = require("./entities/market-store.entity");
const typeorm_1 = require("@nestjs/typeorm");
let MarketStoreModule = class MarketStoreModule {
};
exports.MarketStoreModule = MarketStoreModule;
exports.MarketStoreModule = MarketStoreModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([market_store_entity_1.MarketStore])],
        controllers: [market_store_controller_1.MarketStoreController],
        providers: [market_store_service_1.MarketStoreService],
    })
], MarketStoreModule);
//# sourceMappingURL=market-store.module.js.map
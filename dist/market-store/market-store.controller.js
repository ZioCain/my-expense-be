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
exports.MarketStoreController = void 0;
const common_1 = require("@nestjs/common");
const market_store_service_1 = require("./market-store.service");
const create_market_store_dto_1 = require("./dto/create-market-store.dto");
const update_market_store_dto_1 = require("./dto/update-market-store.dto");
let MarketStoreController = class MarketStoreController {
    marketStoreService;
    constructor(marketStoreService) {
        this.marketStoreService = marketStoreService;
    }
    create(createMarketStoreDto) {
        return this.marketStoreService.create(createMarketStoreDto);
    }
    findAll() {
        return this.marketStoreService.findAll();
    }
    findOne(id) {
        return this.marketStoreService.findOne(id);
    }
    update(id, updateMarketStoreDto) {
        return this.marketStoreService.update(id, updateMarketStoreDto);
    }
    remove(id) {
        return this.marketStoreService.remove(id);
    }
};
exports.MarketStoreController = MarketStoreController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_market_store_dto_1.CreateMarketStoreDto]),
    __metadata("design:returntype", void 0)
], MarketStoreController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MarketStoreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarketStoreController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_market_store_dto_1.UpdateMarketStoreDto]),
    __metadata("design:returntype", void 0)
], MarketStoreController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarketStoreController.prototype, "remove", null);
exports.MarketStoreController = MarketStoreController = __decorate([
    (0, common_1.Controller)('market-store'),
    __metadata("design:paramtypes", [market_store_service_1.MarketStoreService])
], MarketStoreController);
//# sourceMappingURL=market-store.controller.js.map
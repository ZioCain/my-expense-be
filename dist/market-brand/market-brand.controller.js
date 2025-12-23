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
exports.MarketBrandController = void 0;
const common_1 = require("@nestjs/common");
const market_brand_service_1 = require("./market-brand.service");
const create_market_brand_dto_1 = require("./dto/create-market-brand.dto");
const update_market_brand_dto_1 = require("./dto/update-market-brand.dto");
let MarketBrandController = class MarketBrandController {
    marketBrandService;
    constructor(marketBrandService) {
        this.marketBrandService = marketBrandService;
    }
    create(createMarketBrandDto) {
        return this.marketBrandService.create(createMarketBrandDto);
    }
    findAll() {
        return this.marketBrandService.findAll();
    }
    findOne(id) {
        return this.marketBrandService.findOne(id);
    }
    update(id, updateMarketBrandDto) {
        return this.marketBrandService.update(id, updateMarketBrandDto);
    }
    remove(id) {
        return this.marketBrandService.remove(id);
    }
};
exports.MarketBrandController = MarketBrandController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_market_brand_dto_1.CreateMarketBrandDto]),
    __metadata("design:returntype", Promise)
], MarketBrandController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MarketBrandController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarketBrandController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_market_brand_dto_1.UpdateMarketBrandDto]),
    __metadata("design:returntype", void 0)
], MarketBrandController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MarketBrandController.prototype, "remove", null);
exports.MarketBrandController = MarketBrandController = __decorate([
    (0, common_1.Controller)('market-brand'),
    __metadata("design:paramtypes", [market_brand_service_1.MarketBrandService])
], MarketBrandController);
//# sourceMappingURL=market-brand.controller.js.map
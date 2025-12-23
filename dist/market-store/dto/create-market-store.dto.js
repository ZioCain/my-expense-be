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
exports.CreateMarketStoreDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMarketStoreDto {
    address;
    latitudine;
    longitudine;
    market_brand_id;
}
exports.CreateMarketStoreDto = CreateMarketStoreDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Indirizzo del luogo", example: "Via salcazzi, 15" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMarketStoreDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Latitudine del luogo (paralleli)", example: "45" }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateMarketStoreDto.prototype, "latitudine", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Longitudine del luogo (meridiani)", example: "9" }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateMarketStoreDto.prototype, "longitudine", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "ID del brand di supermercato", example: "UUID" }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMarketStoreDto.prototype, "market_brand_id", void 0);
//# sourceMappingURL=create-market-store.dto.js.map
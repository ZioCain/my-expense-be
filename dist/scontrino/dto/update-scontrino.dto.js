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
exports.UpdateScontrinoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_scontrino_dto_1 = require("./create-scontrino.dto");
const class_validator_1 = require("class-validator");
class UpdateScontrinoDto extends (0, swagger_1.PartialType)(create_scontrino_dto_1.CreateScontrinoDto) {
    buy_date;
    market_store_id;
    total;
}
exports.UpdateScontrinoDto = UpdateScontrinoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Data in cui è avvenuto l'acquisto", example: "2025-10-10", type: "string" }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], UpdateScontrinoDto.prototype, "buy_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Lo store in cui è avvenuto l'acquisto", example: "UUID", type: "string" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateScontrinoDto.prototype, "market_store_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "L'importo totale dello scontrino", example: "10.92", type: "number" }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateScontrinoDto.prototype, "total", void 0);
//# sourceMappingURL=update-scontrino.dto.js.map
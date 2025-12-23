"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTagLinkModule = void 0;
const common_1 = require("@nestjs/common");
const product_tag_link_service_1 = require("./product-tag-link.service");
const product_tag_link_controller_1 = require("./product-tag-link.controller");
const typeorm_1 = require("@nestjs/typeorm");
const product_tag_link_entity_1 = require("./entities/product-tag-link.entity");
let ProductTagLinkModule = class ProductTagLinkModule {
};
exports.ProductTagLinkModule = ProductTagLinkModule;
exports.ProductTagLinkModule = ProductTagLinkModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_tag_link_entity_1.ProductTagLink])],
        controllers: [product_tag_link_controller_1.ProductTagLinkController],
        providers: [product_tag_link_service_1.ProductTagLinkService],
    })
], ProductTagLinkModule);
//# sourceMappingURL=product-tag-link.module.js.map
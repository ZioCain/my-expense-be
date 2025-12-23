"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const header_middleware_1 = require("./_middleware/header.middleware");
const typeorm_1 = require("@nestjs/typeorm");
const market_brand_module_1 = require("./market-brand/market-brand.module");
const market_store_module_1 = require("./market-store/market-store.module");
const market_brand_entity_1 = require("./market-brand/entities/market-brand.entity");
const market_store_entity_1 = require("./market-store/entities/market-store.entity");
const product_brand_module_1 = require("./product-brand/product-brand.module");
const product_tag_module_1 = require("./product-tag/product-tag.module");
const product_module_1 = require("./product/product.module");
const product_tag_link_module_1 = require("./product-tag-link/product-tag-link.module");
const expense_module_1 = require("./expense/expense.module");
const product_brand_entity_1 = require("./product-brand/entities/product-brand.entity");
const product_tag_entity_1 = require("./product-tag/entities/product-tag.entity");
const product_entity_1 = require("./product/entities/product.entity");
const product_tag_link_entity_1 = require("./product-tag-link/entities/product-tag-link.entity");
const expense_entity_1 = require("./expense/entities/expense.entity");
const file_controller_1 = require("./media/file-controller/file.controller");
const platform_express_1 = require("@nestjs/platform-express");
const media_entity_1 = require("./media/file-controller/media.entity");
const scontrino_module_1 = require("./scontrino/scontrino.module");
const scontrino_entity_1 = require("./scontrino/entities/scontrino.entity");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(header_middleware_1.HeaderCheckMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            market_brand_module_1.MarketBrandModule,
            market_store_module_1.MarketStoreModule,
            product_brand_module_1.ProductBrandModule,
            product_tag_module_1.ProductTagModule,
            product_module_1.ProductModule,
            product_tag_link_module_1.ProductTagLinkModule,
            expense_module_1.ExpenseModule,
            scontrino_module_1.ScontrinoModule,
            typeorm_1.TypeOrmModule.forFeature([media_entity_1.Media]),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'my-expense',
                password: 'my-expense',
                database: 'my-expense',
                entities: [
                    market_brand_entity_1.MarketBrand,
                    market_store_entity_1.MarketStore,
                    product_brand_entity_1.ProductBrand,
                    product_tag_entity_1.ProductTag,
                    product_entity_1.Product,
                    product_tag_link_entity_1.ProductTagLink,
                    expense_entity_1.Expense,
                    media_entity_1.Media,
                    scontrino_entity_1.Scontrino,
                ],
                synchronize: false,
                logging: true,
            }),
            platform_express_1.MulterModule.register({
                dest: './uploads',
            }),
        ],
        controllers: [file_controller_1.FileController],
    }),
    (0, common_1.Module)({
        imports: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
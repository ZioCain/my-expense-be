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
exports.Scontrino = void 0;
const expense_entity_1 = require("../../expense/entities/expense.entity");
const market_store_entity_1 = require("../../market-store/entities/market-store.entity");
const typeorm_1 = require("typeorm");
let Scontrino = class Scontrino {
    id;
    buy_date;
    total = 0;
    market_store_id;
    marketStore;
    expenses;
};
exports.Scontrino = Scontrino;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Scontrino.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Scontrino.prototype, "buy_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 12, scale: 2 }),
    __metadata("design:type", Number)
], Scontrino.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Scontrino.prototype, "market_store_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => market_store_entity_1.MarketStore, (store) => store.receipts),
    (0, typeorm_1.JoinColumn)({ name: 'market_store_id' }),
    __metadata("design:type", market_store_entity_1.MarketStore)
], Scontrino.prototype, "marketStore", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => expense_entity_1.Expense, expense => expense.scontrino),
    __metadata("design:type", Array)
], Scontrino.prototype, "expenses", void 0);
exports.Scontrino = Scontrino = __decorate([
    (0, typeorm_1.Entity)()
], Scontrino);
//# sourceMappingURL=scontrino.entity.js.map
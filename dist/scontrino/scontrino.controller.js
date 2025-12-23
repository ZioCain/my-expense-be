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
exports.ScontrinoController = void 0;
const common_1 = require("@nestjs/common");
const scontrino_service_1 = require("./scontrino.service");
const create_scontrino_dto_1 = require("./dto/create-scontrino.dto");
const update_scontrino_dto_1 = require("./dto/update-scontrino.dto");
let ScontrinoController = class ScontrinoController {
    scontrinoService;
    constructor(scontrinoService) {
        this.scontrinoService = scontrinoService;
    }
    create(createScontrinoDto) {
        return this.scontrinoService.create(createScontrinoDto);
    }
    findAll() {
        return this.scontrinoService.findAll();
    }
    findOne(id) {
        return this.scontrinoService.findOne(id);
    }
    update(id, updateScontrinoDto) {
        return this.scontrinoService.update(id, updateScontrinoDto);
    }
    remove(id) {
        return this.scontrinoService.remove(id);
    }
    getExpenses(id) {
        return this.scontrinoService.getExpensesFor(id);
    }
    getLastExpenseAt(store_id) {
        return this.scontrinoService.getLastExpenseAt(store_id);
    }
    getExpensesAt(store_id) {
        return this.scontrinoService.getExpensesAt(store_id);
    }
    getAllSpentAt(store_id) {
        return this.scontrinoService.getAllSpentAt(store_id);
    }
};
exports.ScontrinoController = ScontrinoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_scontrino_dto_1.CreateScontrinoDto]),
    __metadata("design:returntype", void 0)
], ScontrinoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScontrinoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScontrinoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_scontrino_dto_1.UpdateScontrinoDto]),
    __metadata("design:returntype", void 0)
], ScontrinoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScontrinoController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/expenses'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScontrinoController.prototype, "getExpenses", null);
__decorate([
    (0, common_1.Get)('getLastExpenseAt/:store_id'),
    __param(0, (0, common_1.Param)('store_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScontrinoController.prototype, "getLastExpenseAt", null);
__decorate([
    (0, common_1.Get)('getExpensesAt/:store_id'),
    __param(0, (0, common_1.Param)('store_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScontrinoController.prototype, "getExpensesAt", null);
__decorate([
    (0, common_1.Get)('getAllSpentAt/:store_id'),
    __param(0, (0, common_1.Param)('store_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScontrinoController.prototype, "getAllSpentAt", null);
exports.ScontrinoController = ScontrinoController = __decorate([
    (0, common_1.Controller)('scontrino'),
    __metadata("design:paramtypes", [scontrino_service_1.ScontrinoService])
], ScontrinoController);
//# sourceMappingURL=scontrino.controller.js.map
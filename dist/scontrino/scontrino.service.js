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
exports.ScontrinoService = void 0;
const common_1 = require("@nestjs/common");
const scontrino_entity_1 = require("./entities/scontrino.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
const response_scontrino_dto_1 = require("./dto/response.scontrino.dto");
const response_expense_dto_1 = require("../expense/dto/response.expense.dto");
const expense_entity_1 = require("../expense/entities/expense.entity");
let ScontrinoService = class ScontrinoService {
    repo;
    repoExpense;
    constructor(repo, repoExpense) {
        this.repo = repo;
        this.repoExpense = repoExpense;
    }
    async create(createDto) {
        return (0, class_transformer_1.plainToInstance)(response_scontrino_dto_1.ScontrinoResponseDto, await this.repo.save(this.repo.create(createDto)));
    }
    async findAll() {
        return (0, class_transformer_1.plainToInstance)(response_scontrino_dto_1.ScontrinoResponseDto, await this.repo.find({
            relations: ['marketStore']
        }));
    }
    async findOne(id) {
        return (0, class_transformer_1.plainToInstance)(response_scontrino_dto_1.ScontrinoResponseDto, await this.repo.findOne({ where: { id }, relations: ['marketStore'] }));
    }
    async update(id, updateDto) {
        const existing = await this.findOne(id);
        if (!existing)
            throw new common_1.NotFoundException();
        this.repo.merge(existing, updateDto);
        return this.repo.save(existing);
    }
    remove(id) {
        return this.repo.delete(id);
    }
    async getExpensesFor(scontrino_id) {
        return (0, class_transformer_1.plainToInstance)(response_expense_dto_1.ExpenseResponseDto, await this.repoExpense.find({
            where: { scontrino_id },
            relations: ['product']
        }));
    }
    async getLastExpenseAt(store_id) {
        return (0, class_transformer_1.plainToInstance)(response_scontrino_dto_1.ScontrinoResponseDto, await this.repo.findOne({
            where: { market_store_id: store_id },
            order: { buy_date: 'DESC' }
        }));
    }
    async getExpensesAt(store_id) {
        return (0, class_transformer_1.plainToInstance)(response_scontrino_dto_1.ScontrinoResponseDto, await this.repo.find({
            where: { market_store_id: store_id },
            order: { buy_date: 'DESC' }
        }));
    }
    async getAllSpentAt(store_id) {
        return {
            total: await this.repo.sum('total', {
                market_store_id: store_id,
            })
        };
    }
};
exports.ScontrinoService = ScontrinoService;
exports.ScontrinoService = ScontrinoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(scontrino_entity_1.Scontrino)),
    __param(1, (0, typeorm_2.InjectRepository)(expense_entity_1.Expense)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ScontrinoService);
//# sourceMappingURL=scontrino.service.js.map
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScontrinoService } from './scontrino.service';
import { CreateScontrinoDto } from './dto/create-scontrino.dto';
import { UpdateScontrinoDto } from './dto/update-scontrino.dto';
import { ExpenseResponseDto } from 'src/expense/dto/response.expense.dto';

@Controller('scontrino')
export class ScontrinoController {
	constructor(private readonly scontrinoService: ScontrinoService) { }

	@Post()
	create(@Body() createScontrinoDto: CreateScontrinoDto) {
		return this.scontrinoService.create(createScontrinoDto);
	}

	@Get()
	findAll() {
		return this.scontrinoService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.scontrinoService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateScontrinoDto: UpdateScontrinoDto) {
		return this.scontrinoService.update(id, updateScontrinoDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.scontrinoService.remove(id);
	}

	@Get(':id/expenses')
	getExpenses(@Param('id') id: string):Promise<ExpenseResponseDto[]>{
		return this.scontrinoService.getExpensesFor(id);
	}

	@Get('getLastExpenseAt/:store_id')
	getLastExpenseAt(@Param('store_id') store_id: string){
		return {message: "fuck you"};
	}

	@Get('getExpensesAt/:store_id')
	getExpensesAt(@Param('store_id') store_id: string){
		return {message: "fuck you"};
	}

	@Get('getAllSpentAt/:store_id')
	getAllSpentAt(@Param('store_id') store_id: string){
		return {message: "fuck you"};
	}
}

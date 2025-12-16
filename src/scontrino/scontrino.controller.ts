import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScontrinoService } from './scontrino.service';
import { CreateScontrinoDto } from './dto/create-scontrino.dto';
import { UpdateScontrinoDto } from './dto/update-scontrino.dto';

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
}

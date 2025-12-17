import { Module } from '@nestjs/common';
import { ScontrinoService } from './scontrino.service';
import { ScontrinoController } from './scontrino.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scontrino } from './entities/scontrino.entity';
import { Expense } from 'src/expense/entities/expense.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Scontrino, Expense])],
	controllers: [ScontrinoController],
	providers: [ScontrinoService],
})
export class ScontrinoModule { }

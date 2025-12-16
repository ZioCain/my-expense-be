import { Module } from '@nestjs/common';
import { ScontrinoService } from './scontrino.service';
import { ScontrinoController } from './scontrino.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scontrino } from './entities/scontrino.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Scontrino])],
	controllers: [ScontrinoController],
	providers: [ScontrinoService],
})
export class ScontrinoModule { }

import { Module } from '@nestjs/common';
import { MarketBrandService } from './market-brand.service';
import { MarketBrandController } from './market-brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketBrand } from './entities/market-brand.entity';

@Module({
	imports: [TypeOrmModule.forFeature([MarketBrand])],
  	controllers: [MarketBrandController],
	providers: [MarketBrandService],
})
export class MarketBrandModule { }

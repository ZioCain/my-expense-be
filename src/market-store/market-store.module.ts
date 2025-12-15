import { Module } from '@nestjs/common';
import { MarketStoreService } from './market-store.service';
import { MarketStoreController } from './market-store.controller';
import { MarketStore } from './entities/market-store.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([MarketStore])],
	controllers: [MarketStoreController],
	providers: [MarketStoreService],
})
export class MarketStoreModule { }

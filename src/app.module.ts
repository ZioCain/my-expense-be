import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketBrandModule } from './market-brand/market-brand.module';
import { MarketStoreModule } from './market-store/market-store.module';
import { MarketBrand } from './market-brand/entities/market-brand.entity';
import { MarketStore } from './market-store/entities/market-store.entity';

@Module({
	imports: [
		MarketBrandModule,
		MarketStoreModule,

		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'my-expense',
			password: 'my-expense',
			database: 'my-expense',
			entities: [
				MarketBrand,
				MarketStore
			],
			synchronize: false,
			logging: true,
		}),
	],
	controllers: [
		AppController,
	],
	providers: [AppService],
})
export class AppModule { }

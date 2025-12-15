import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarketBrandModule } from './market-brand/market-brand.module';
import { MarketStoreModule } from './market-store/market-store.module';
import { MarketBrand } from './market-brand/entities/market-brand.entity';
import { MarketStore } from './market-store/entities/market-store.entity';
import { ProductBrandModule } from './product-brand/product-brand.module';
import { ProductTagModule } from './product-tag/product-tag.module';
import { ProductModule } from './product/product.module';
import { ProductTagLinkModule } from './product-tag-link/product-tag-link.module';
import { ExpenseModule } from './expense/expense.module';
import { ProductBrand } from './product-brand/entities/product-brand.entity';
import { ProductTag } from './product-tag/entities/product-tag.entity';
import { Product } from './product/entities/product.entity';
import { ProductTagLink } from './product-tag-link/entities/product-tag-link.entity';
import { Expense } from './expense/entities/expense.entity';
import { FileController } from './media/file-controller/file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { Media } from './media/file-controller/media.entity';

@Module({
	imports: [
		MarketBrandModule,
		MarketStoreModule,
		ProductBrandModule,
		ProductTagModule,
		ProductModule,
		ProductTagLinkModule,
		ExpenseModule,
		TypeOrmModule.forFeature([Media]),

		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'my-expense',
			password: 'my-expense',
			database: 'my-expense',
			entities: [
				MarketBrand,
				MarketStore,
				ProductBrand,
				ProductTag,
				Product,
				ProductTagLink,
				Expense,
				Media,
			],
			synchronize: false,
			logging: true,
		}),
		MulterModule.register({
			dest: './uploads', // Destination folder for uploaded files
		}),
	],
	controllers: [FileController],
})
export class AppModule { }

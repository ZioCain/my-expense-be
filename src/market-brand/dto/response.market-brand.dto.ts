import { Expose } from 'class-transformer';
import { MarketStore } from '../../market-store/entities/market-store.entity';
import { IsArray } from 'class-validator';

export class MarketBrandResponseDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  logo: string;

  @Expose()
  @IsArray()
  stores: MarketStore[];
}
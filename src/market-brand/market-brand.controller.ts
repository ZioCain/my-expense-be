import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketBrandService } from './market-brand.service';
import { CreateMarketBrandDto } from './dto/create-market-brand.dto';
import { UpdateMarketBrandDto } from './dto/update-market-brand.dto';
import { MarketBrandResponseDto } from './dto/response.market-brand.dto';
import { MarketBrand } from './entities/market-brand.entity';

@Controller('market-brand')
export class MarketBrandController {
  constructor(private readonly marketBrandService: MarketBrandService) {}

  @Post()
  create(@Body() createMarketBrandDto: CreateMarketBrandDto) : Promise<MarketBrandResponseDto> {
	return this.marketBrandService.create(createMarketBrandDto);
  }

  @Get()
  findAll() : Promise<MarketBrand[]> {
    return this.marketBrandService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marketBrandService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarketBrandDto: UpdateMarketBrandDto) {
    return this.marketBrandService.update(id, updateMarketBrandDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marketBrandService.remove(id);
  }
}

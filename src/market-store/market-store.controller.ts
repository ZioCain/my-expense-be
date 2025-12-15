import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketStoreService } from './market-store.service';
import { CreateMarketStoreDto } from './dto/create-market-store.dto';
import { UpdateMarketStoreDto } from './dto/update-market-store.dto';

@Controller('market-store')
export class MarketStoreController {
  constructor(private readonly marketStoreService: MarketStoreService) {}

  @Post()
  create(@Body() createMarketStoreDto: CreateMarketStoreDto) {
    return this.marketStoreService.create(createMarketStoreDto);
  }

  @Get()
  findAll() {
    return this.marketStoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marketStoreService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarketStoreDto: UpdateMarketStoreDto) {
    return this.marketStoreService.update(+id, updateMarketStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marketStoreService.remove(+id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.itemsService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.itemsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.itemsService.remove(id);
  }
}

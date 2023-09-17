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
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { QueryDto } from 'src/common/dto/query.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsService } from './items.service';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @ApiParam({
    name: 'q',
    type: String,
    description: 'Search query for items',
    required: false,
  })
  @Get()
  findAll(@Query() query: QueryDto) {
    return this.itemsService.findAll(query);
  }

  @ApiParam({
    name: 'id',
    type: String,
    description: 'Search an item by Object ID',
    required: false,
  })
  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.itemsService.findOne(id);
  }

  @ApiParam({
    name: 'id',
    type: String,
    description: 'Update an item by Object ID',
    required: true,
  })
  @ApiBody({
    type: UpdateItemDto,
    description: "Item's data to update",
    required: true,
  })
  @Patch(':id')
  update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    return this.itemsService.update(id, updateItemDto);
  }

  @ApiParam({
    name: 'id',
    type: String,
    description: 'Delete an item by Object ID',
    required: true,
  })
  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.itemsService.remove(id);
  }
}

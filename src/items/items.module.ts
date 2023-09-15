import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { Item, ItemSchema } from './entities/item.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ItemsController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Item.name,
        schema: ItemSchema,
      },
    ]),
  ],
  providers: [ItemsService],
  exports: [MongooseModule],
})
export class ItemsModule {}

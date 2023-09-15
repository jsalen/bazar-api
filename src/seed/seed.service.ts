import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Item } from 'src/items/entities/item.entity';
import { items } from './seed-data';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Item.name)
    private readonly itemModel: Model<Item>,
  ) {}

  async seed() {
    // Delete every item to make a clean seed
    await this.itemModel.deleteMany({});

    const itemsWithObjectID = items.map((item) => ({
      ...item,
      _id: new mongoose.Types.ObjectId(),
    }));

    await this.itemModel.insertMany(itemsWithObjectID);

    return 'Seed completed';
  }
}

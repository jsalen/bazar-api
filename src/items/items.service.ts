import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name)
    private readonly ItemModel: Model<Item>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    try {
      const item = await this.ItemModel.create({
        ...createItemDto,
        _id: new mongoose.Types.ObjectId(),
      });

      return item;
    } catch (error) {
      this.handleException(error);
    }
  }

  findAll() {
    return `This action returns all items`;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }

  handleException(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Duplicated title: ${JSON.stringify(error.keyValue)}`,
      );
    }

    console.error(error);

    throw new InternalServerErrorException(
      `Unhandled error. Check server logs.`,
    );
  }
}

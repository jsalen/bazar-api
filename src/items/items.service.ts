import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, isValidObjectId } from 'mongoose';
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
    createItemDto.title = createItemDto.title.toLowerCase();

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

  async findOne(query: string) {
    let item: Item;

    if (isValidObjectId(query)) {
      const objectID = new mongoose.Types.ObjectId(query);

      item = await this.ItemModel.findById(objectID);
    }

    if (!item) {
      item = await this.ItemModel.findOne({ title: query.toLowerCase() });
    }

    if (!item) {
      throw new NotFoundException(`Item not found: ${query}`);
    }

    return item;
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

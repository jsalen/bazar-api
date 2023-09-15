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

  async update(id: string, updateItemDto: UpdateItemDto) {
    const objectID = new mongoose.Types.ObjectId(id);

    if (updateItemDto.title) {
      updateItemDto.title = updateItemDto.title.toLowerCase();
    }

    try {
      const item = await this.ItemModel.findByIdAndUpdate(
        objectID,
        updateItemDto,
        { new: true },
      );

      if (!item) {
        throw new NotFoundException(`Item not found: ${objectID}`);
      }

      return item;
    } catch (error) {
      this.handleException(error);
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.ItemModel.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (deletedCount === 0) {
      throw new NotFoundException(`Item not found: ${id}`);
    }

    return;
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

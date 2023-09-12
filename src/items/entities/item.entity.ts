import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({
  timestamps: true, // crea createdAt y updatedAt
  versionKey: false, // quitar __v
  toJSON: { virtuals: true, getters: true }, // utilizar campos virtuales
})
export class Item extends Document {
  @Prop({ type: Types.ObjectId, required: true })
  _id: Types.ObjectId;

  @Prop({
    index: true,
    required: true,
    trim: true,
    type: String,
    unique: true,
  })
  title: string;

  @Prop({
    index: true,
    required: true,
    type: String,
  })
  description: string;

  @Prop({
    min: 0,
    required: true,
    type: Number,
  })
  price: number;

  @Prop({
    default: 0,
    min: 0,
    type: Number,
  })
  discountPercentage: number;

  @Prop({
    default: 0,
    min: 0,
    type: Number,
  })
  rating: number;

  @Prop({
    default: 0,
    min: 0,
    type: Number,
  })
  stock: number;

  @Prop({
    required: true,
    type: String,
  })
  brand: string;

  @Prop({
    required: true,
    type: String,
  })
  category: string;

  @Prop({
    required: true,
    type: String,
  })
  thumbnail: string;

  @Prop({
    default: [],
    required: true,
    type: [String],
  })
  images: string[];
}

// Export schema so that it can be defined in the database
export const ItemSchema = SchemaFactory.createForClass(Item);

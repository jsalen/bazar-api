import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateItemDto {
  @ApiProperty({
    description: 'The title of the item',
    required: true,
    type: String,
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    description: 'The description of the item',
    required: true,
    type: String,
  })
  @IsString()
  @MinLength(1)
  description: string;

  @ApiProperty({
    description: 'The price of the item',
    required: true,
    default: 0,
    type: Number,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'The discount percentage of the item',
    required: false,
    default: 0,
    type: Number,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  discountPercentage?: number;

  @ApiProperty({
    description: 'The rating of the item',
    required: false,
    default: 0,
    type: Number,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  rating?: number;

  @ApiProperty({
    description: 'The stock of the item',
    required: false,
    default: 0,
    type: Number,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    description: 'The brand of the item',
    required: true,
    type: String,
  })
  @IsString()
  @MinLength(1)
  brand: string;

  @ApiProperty({
    description: 'The category of the item',
    required: true,
    type: String,
  })
  @IsString()
  @MinLength(1)
  category: string;

  @ApiProperty({
    description: 'The thumbnail of the item',
    required: true,
    type: String,
  })
  @IsString()
  @MinLength(1)
  thumbnail: string;

  @ApiProperty({
    type: [String],
    description: 'The images of the item',
    required: true,
  })
  @IsString({ each: true })
  images: string[];
}

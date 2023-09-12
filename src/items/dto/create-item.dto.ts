import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateItemDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  discountPercentage?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  rating?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsString()
  @MinLength(1)
  brand: string;

  @IsString()
  @MinLength(1)
  category: string;

  @IsString()
  @MinLength(1)
  thumbnail: string;

  @IsString({ each: true })
  images: string[];
}

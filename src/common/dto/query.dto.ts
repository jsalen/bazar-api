import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from './pagination.dto';

export class QueryDto extends PaginationDto {
  @IsString()
  @IsOptional()
  readonly q?: string;
}

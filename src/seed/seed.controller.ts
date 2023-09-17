import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SeedService } from './seed.service';

@ApiTags('Seed DB')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  seed() {
    return this.seedService.seed();
  }
}

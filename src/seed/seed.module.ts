import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ItemsModule } from 'src/items/items.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ItemsModule],
})
export class SeedModule {}

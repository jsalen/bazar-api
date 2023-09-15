import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/bazar'),
    ItemsModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

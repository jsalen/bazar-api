import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/bazar'),
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

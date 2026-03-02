import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShapeModule } from './shape/shape.module';

@Module({
  imports: [ShapeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

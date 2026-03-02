import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()//akan menggunakan sebuah API dengan metode GET
  getHello(): string {
    return this.appService.getHello();
  }
}

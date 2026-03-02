import { Injectable } from '@nestjs/common';

@Injectable() //berfungsi untuk proses pemanggilan function / class lebih mudah dan cepat
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

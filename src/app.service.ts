import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Prem!';
  }

  getData(): string {
    return 'Some More data';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
  getPage(page: string) {
    return `This is ${page} page.`;
  }
}

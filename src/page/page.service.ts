import { Injectable } from '@nestjs/common';

@Injectable()
export class PageService {
  getPage(page: string) {
    return {
			code: 0,
			data: [],
			msg: `This is ${page} page.`
		};
  }
}

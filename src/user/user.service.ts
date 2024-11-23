import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return {
      code: 0,
      data: [],
      msg: '请求用户列表成功 1',
    };
  }

  addUsers() {
    return {
      code: 0,
      data: [],
      msg: '添加用户成功 2',
    };
  }
}

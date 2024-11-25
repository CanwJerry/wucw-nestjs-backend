import { Controller, Get, Post, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser(): any {
    return this.userService.getUsers();
  }

  @Get('del')
  delUser(): any {
    return this.userService.delUsers();
  }

  @Delete()
  removeUser(): any {
    return this.userService.delUsers();
  }

  @Post()
  addUser(): any {
    return this.userService.addUsers();
  }
}

import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  users = [{ name: 'John' }, { name: 'Mark' }];

  @Get()
  findAll() {
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.users[id];
  }
}

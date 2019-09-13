import { Controller, Get, Param } from '@nestjs/common';

@Controller('organizations')
export class OrganizationsController {
  organizations = [{ name: 'John' }, { name: 'Mark' }];

  @Get()
  findAll() {
    return this.organizations;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizations[id];
  }
}

import { Module } from '@nestjs/common';
import { OrganizationsModule } from './organizations/organizations.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, OrganizationsModule],
})
export class AppModule {}

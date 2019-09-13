import { AzureFunction } from '@nestjs/azure-serverless';
import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';

@AzureFunction({
  name: 'organizations',
})
@Module({
  controllers: [OrganizationsController],
})
export class OrganizationsModule {}

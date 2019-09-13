import { AzureFunction } from '@nestjs/azure-serverless';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@AzureFunction({
  name: 'users',
})
@Module({
  controllers: [UsersController],
})
export class UsersModule {}

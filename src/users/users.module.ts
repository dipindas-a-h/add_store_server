import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaClient } from '@prisma/client';
// import { PrismaService } from 'src/prismaService/prisma.service';

@Module({
  controllers: [UsersController],
  // providers: [UsersService],
  providers: [UsersService, PrismaClient], // Move PrismaService to the providers array
})
export class UsersModule {}

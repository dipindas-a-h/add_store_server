import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaClient } from '@prisma/client';
import { JwtService } from 'src/JWT/jwt.service';
// import { PrismaService } from 'src/prismaService/prisma.service';


@Module({
  controllers: [UsersController],
  // providers: [UsersService],
  providers: [UsersService, PrismaClient,JwtService], // Move PrismaService to the providers array
})
export class UsersModule {}

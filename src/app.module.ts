import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prismaService/prisma.service';

@Module({
  imports: [ UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
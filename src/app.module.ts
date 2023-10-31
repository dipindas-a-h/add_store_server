import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prismaService/prisma.service';
import { PostModule } from './post/post.module';
import { DtoModule } from './dto/dto.module';

@Module({
  imports: [ UsersModule, PostModule, DtoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

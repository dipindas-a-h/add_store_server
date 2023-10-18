import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { PrismaService } from 'src/prismaService/prisma.service';
import { PrismaClient } from '@prisma/client';
import { JwtService } from 'src/JWT/jwt.service';
import { error } from 'console';

@Injectable()
export class UsersService {
  // constructor(private readonly prisma : PrismaService) {}
  constructor(
    private readonly prisma: PrismaClient,
    private readonly jwtService: JwtService,
  ) {}
  // constructor(private readonly jwtService: JwtService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      console.log('constructor', createUserDto);

      const { password } = createUserDto;
      const Ctoken = this.jwtService.generateToken({ password });

      console.log('token', Ctoken, createUserDto.interests);

      const newUser = await this.prisma.user.create({
        data: {
          username: createUserDto.username,
          
          passToken : Ctoken,
          email: createUserDto.email,
          profilePicture: createUserDto.profile_picture,
          registrationDate: createUserDto.registration_time,
          age: parseInt(createUserDto.age),
          bio: createUserDto.bio,
          location: createUserDto.location,
          interests: createUserDto.intrest,
        },
      });

      return newUser;
    } catch (error) {
      console.error('create error', error);

      return error;
    }
  }
}

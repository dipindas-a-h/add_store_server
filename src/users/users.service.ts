import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { PrismaService } from 'src/prismaService/prisma.service';
import { PrismaClient } from '@prisma/client';
import { JwtService } from 'src/JWT/jwt.service';
import { error } from 'console';
import { UserLoginDto } from './dto/user-login.dto';

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
      // console.log('constructor', createUserDto);

      const { password } = createUserDto;
      const Ctoken = this.jwtService.generateToken({ password });

      // console.log('token', Ctoken, createUserDto.intrest);

      const newUser = await this.prisma.user.create({
        data: {
          username: createUserDto.username,

          passToken: Ctoken,
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

  async userLogin(LoginDto: UserLoginDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          username: LoginDto.username,
        },
      });

      if (user) {
        const pswd = this.jwtService.verifyToken(user.passToken);
        // console.log('loginDto', LoginDto,user,password);
        // console.log("convert from token --------------",pswd.password);

        if (LoginDto.password === pswd.password) {
          return { status: true, data: 'Auth success' };
        } else {
          return { status: false, data: 'Auth Failed' };
        }
      } else {
        throw new Error('user Not Find');
        return { status: false, msg: 'User Not Found' };
      }
    } catch (err) {
      console.error('login error', err);
      return { status: false, msg: 'User Not Found' };

    }
  }



}

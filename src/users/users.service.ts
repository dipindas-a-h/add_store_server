import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { PrismaService } from 'src/prismaService/prisma.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {

  // constructor(private readonly prisma : PrismaService) {}
  constructor(private readonly prisma: PrismaClient) { }

  create(createUserDto: CreateUserDto) {

    // console.log("constructor",createUserDto);

    const { username, password } = createUserDto;
    console.log("uuu", username, password, createUserDto);


    const newUser = this.prisma.user.create({
      data: {
        username,
        password

      },
    });

    return newUser;
  }


  async login(loginDto: CreateUserDto) {
    const checkUser = await this.prisma.user.findUnique({
      where: {
        username: loginDto.username
      },
    });
  
    if (checkUser && checkUser.password === loginDto.password) {
      return {
        "message" : true,
        "status": 200,
        "data":checkUser  

      };
    } else {
      // Handle the case when the user is not found, e.g., throw an error or return an appropriate response.
      // throw new Error('User not found');
      return {"message" : false , "status" : 200 }
    }
  }

  findAll() {
    const allUsers = this.prisma.user.findMany()
    console.log("all users", allUsers);

    return allUsers;
  }

  findOne(id: number) {
    const getOne = this.prisma.user.findUnique({
      where: {
        id: id
      },
    });
    return getOne;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(" updatedto", updateUserDto, id);

    const update = this.prisma.user.update({
      where: { id: id },
      data: updateUserDto,
    });

    return update;
  }

  remove(id: number) {
    const Delete = this.prisma.user.delete({
      where: { id: id },

    })
    return Delete;
  }
}

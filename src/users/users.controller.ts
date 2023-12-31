import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() LoginDto: UserLoginDto){
    return this.usersService.userLogin(LoginDto)
  }

  // @Post('/login')
  // login(@Body() loginDto: CreateUserDto){
  //   return this.usersService.login(loginDto)
  // }


  // @Get('/allusers')
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get('/findOne/:id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch('/update/:id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}

import { IsNotEmpty, IsString, IsAlphanumeric } from 'class-validator';

export class CreateUserDto {

id : number;

  @IsNotEmpty()
  @IsString()
  username: string;

  

  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  password: string;

  email: string;
  profile_picture : string;
  bio: string;
  registration_time: Date;
  age: string;
  location: string;
  intrest : string[];

}

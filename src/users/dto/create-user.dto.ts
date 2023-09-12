import { IsNotEmpty, IsString, IsAlphanumeric } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsAlphanumeric()
  password: string;
}

import { IsAlphanumeric, IsNotEmpty, IsString } from "class-validator";

export class UserLoginDto{

    @IsNotEmpty()
    @IsString()

    username: string;


    @IsNotEmpty()
    @IsAlphanumeric()
    password: string;
}
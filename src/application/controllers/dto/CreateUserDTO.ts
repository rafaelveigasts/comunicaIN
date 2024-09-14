import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  public name: string;
}


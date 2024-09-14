import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateUserDTO {
  @IsString()
  @IsNotEmpty()
  public id: string;


  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public pass: string;
}
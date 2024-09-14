import { IsEmail, IsEnum, IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ListUserByIdDTO {
  @IsString()
  @IsNotEmpty()
  public id: string;

}
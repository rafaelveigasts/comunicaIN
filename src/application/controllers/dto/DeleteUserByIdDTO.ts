import { IsEmail, IsEnum, IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DeleteUserByIdDTO {
  @IsString()
  @IsNotEmpty()
  public id: string;

}
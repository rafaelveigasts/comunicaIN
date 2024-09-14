import { IsEmail, IsEnum, IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TargetAudience } from "./CreateUserDTO";


export class ListUserByIdDTO {
  @IsString()
  @IsNotEmpty()
  public id: string;

}
import { IsNotEmpty, IsString } from "class-validator";

export class DeleteUserByIdDTO {
  @IsString()
  @IsNotEmpty()
  public id: string;

}
import { User } from "@prisma/client";
import { CreateUserInput, UpdateUserInput } from "../../repository/UserRepository";
import { UpdateUserDTO } from "@/application/controllers/dto/UpdateSurveyDTO";

export interface IUpdateUserUseCase {
  execute({id, name, pass  }: UpdateUserDTO): Promise<User>;
}
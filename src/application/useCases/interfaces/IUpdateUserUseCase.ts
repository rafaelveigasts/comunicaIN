import { User } from "@prisma/client";
import { CreateUserInput, UpdateUserInput } from "../../repository/UserRepository";

export interface IUpdateUserUseCase {
  execute({id, name  }: UpdateUserInput): Promise<User>;
}
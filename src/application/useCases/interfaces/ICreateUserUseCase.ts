import { User } from "@prisma/client";
import { CreateUserInput } from "../../repository/UserRepository";

export interface ICreateUserUseCase {
  execute({ name, pass }: CreateUserInput): Promise<User>;
}
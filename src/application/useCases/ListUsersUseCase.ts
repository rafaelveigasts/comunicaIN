import { User } from "@prisma/client";
import { IUserRepository } from "../repository/UserRepository";
import { inject, injectable } from "tsyringe";
import { IListUsersUseCase } from "./interfaces/IListUsersUseCase";


@injectable()
export class ListUsersUseCase implements IListUsersUseCase{
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ){}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.list();

    return users
  }
}
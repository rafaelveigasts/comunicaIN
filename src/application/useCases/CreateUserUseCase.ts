import { User } from "@prisma/client";
import { CreateUserDTO } from "../controllers/dto/CreateUserDTO";
import { IUserRepository } from "../repository/UserRepository";
import { ICreateUserUseCase } from "./interfaces/ICreateUserUseCase";
import { inject, injectable } from "tsyringe";



@injectable()
export class CreateUserUseCase implements ICreateUserUseCase{
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({name,pass}: CreateUserDTO): Promise<User> {


    const user = await this.userRepository.create({ 
      name, 
      pass
    });


    return user;
  }

}
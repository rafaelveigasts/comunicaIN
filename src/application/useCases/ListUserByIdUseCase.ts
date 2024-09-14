import { User } from "@prisma/client";
import { IUserRepository } from "../repository/UserRepository";
import { inject, injectable } from "tsyringe";
import { ListUserByIdDTO } from "../controllers/dto/ListUserByIdDTO";
import { IListUserByIdUseCase } from "./interfaces/IListUserByIdUseCase";
import { NotFound } from "@/shared/errors/dto/NotFound";


@injectable()
export class ListUserByIdUseCase implements IListUserByIdUseCase{
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({id}: ListUserByIdDTO): Promise<User> {
    const user = await this.userRepository.findById(id)

    if(!user){
      throw new NotFound("User not found")
    }

    return user;
  }
}
import { IUserRepository } from "../repository/UserRepository";
import { inject, injectable } from "tsyringe";
import { DeleteUserByIdDTO } from "../controllers/dto/DeleteUserByIdDTO";
import { IDeleteUserByIdUseCase } from "./interfaces/IDeleteUserByIdUseCase";
import { NotFound } from "@/shared/errors/dto/NotFound";


@injectable()
export class DeleteUserByIdUseCase implements IDeleteUserByIdUseCase{
  constructor(
    @inject("IUserRepository")
    private userRepository: IUserRepository
  ){}

  async execute({id}: DeleteUserByIdDTO): Promise<void> {
    const user = await this.userRepository.findById(id)

    if(!user){
      throw new NotFound("User not found")
    }

    await this.userRepository.delete(id)

    return 
  }
}
import { User } from '@prisma/client'
import { IUserRepository, UpdateUserInput } from '../repository/UserRepository'
import { inject, injectable } from 'tsyringe'
import { IUpdateUserUseCase } from './interfaces/IUpdateUserUseCase'
import { NotFound } from '@/shared/errors/dto/NotFound'

@injectable()
export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(
    @inject('IUserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({ id, name, pass }: UpdateUserInput): Promise<User> {
    const userExists = await this.userRepository.findById(id)

    if (!userExists) {
      throw new NotFound('User not found')
    }

    const user = await this.userRepository.update({
    id,
     name,
     pass
    })

    return user
  }
}

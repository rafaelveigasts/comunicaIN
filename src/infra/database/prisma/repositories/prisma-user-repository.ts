import prisma from '../prismaClient'
import { PrismaClient, User } from '@prisma/client'
import { IUserRepository, UpdateUserInput} from '@/application/repository'
import { CreateUserDTO } from '@/application/controllers/dto/CreateUserDTO'

export class PrismaUserRepository implements IUserRepository {
  private readonly user: PrismaClient['user']

  constructor() {
    this.user = prisma.user
  }

  async create({ name }: CreateUserDTO): Promise<User> {
    const user = await this.user.create({
      data: {
        name
      }
    })

    return user
  }

  async delete(id: string): Promise<void> {
    await this.user.findFirst({
      where: {
        id
      }
    })
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.user.findFirst({
      where: {
        id
      }
    })

    return user
  }

  async update({ id,name }: UpdateUserInput): Promise<User> {
    const updated = await this.user.update({
      where: { id },
      data: {
        name,
        
      }
    })

    return updated
  }

  async list(): Promise<User[]> {
    return await this.user.findMany()
  }
}

import { User } from '@prisma/client'

export type CreateUserInput = {
  name: string
  pass: string
}

export type UpdateUserInput = {
  id: string
  name: string
  pass: string
}


export interface IUserRepository {
  create({ name }: CreateUserInput): Promise<User>
  findById(id: string): Promise<User | null>
  update({ id, name, pass }: UpdateUserInput): Promise<User>
  list(): Promise<User[]>
  delete(id: string): Promise<void>
}

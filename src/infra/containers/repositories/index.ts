import { container } from 'tsyringe'

import { PrismaUserRepository } from '../../database/prisma/repositories/prisma-user-repository'
import { IUserRepository } from '../../../application/repository/UserRepository'

container.registerSingleton<IUserRepository>(
  'IUserRepository',
  PrismaUserRepository
)

import { container } from 'tsyringe'

import { CreateUserUseCase } from '@/application/useCases/CreateUserUseCase'
import { ICreateUserUseCase } from '@/application/useCases/interfaces/ICreateUserUseCase'

import { ListUsersUseCase } from '@/application/useCases/ListUsersUseCase'
import { IListUsersUseCase } from '@/application/useCases/interfaces/IListUsersUseCase'

import { UpdateUserUseCase } from '@/application/useCases/UpdateUserUseCase'
import { IUpdateUserUseCase } from '@/application/useCases/interfaces/IUpdateUserUseCase'

import { ListUserByIdUseCase } from '@/application/useCases/ListUserByIdUseCase'
import {IListUserByIdUseCase} from '@/application/useCases/interfaces/IListUserByIdUseCase'

import { DeleteUserByIdUseCase } from '@/application/useCases/DeleteUserByIdUseCase'
import {IDeleteUserByIdUseCase} from '@/application/useCases/interfaces/IDeleteUserByIdUseCase'

container.registerSingleton<ICreateUserUseCase>(
  'ICreateUserUseCase',
  CreateUserUseCase
)

container.registerSingleton<IUpdateUserUseCase>(
  'IUpdateUserUseCase',
  UpdateUserUseCase
)

container.registerSingleton<IListUsersUseCase>('IListUsersUseCase', ListUsersUseCase)

container.registerSingleton<IListUserByIdUseCase>('IListUserByIdUseCase', ListUserByIdUseCase)

container.registerSingleton<IDeleteUserByIdUseCase>('IDeleteUserByIdUseCase', DeleteUserByIdUseCase)

import { CreateUserUseCase } from '@/application/useCases/CreateUserUseCase'
import { ICreateUserUseCase } from '@/application/useCases/interfaces/ICreateUserUseCase'
import { IListUsersUseCase} from '@/application/useCases/interfaces/IListUsersUseCase'
import { IUpdateUserUseCase } from '@/application/useCases/interfaces/IUpdateUserUseCase'
import { ListUsersUseCase } from '@/application/useCases/ListUsersUseCase'
import { UpdateUserUseCase } from '@/application/useCases/UpdateUserUseCase'
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository'
import {IListUserByIdUseCase} from '@/application/useCases/interfaces/IListUserByIdUseCase'
import {ListUserByIdUseCase} from '@/application/useCases/ListUserByIdUseCase'
import {IDeleteUserByIdUseCase} from '@/application/useCases/interfaces/IDeleteUserByIdUseCase'
import { DeleteUserByIdUseCase } from '@/application/useCases/DeleteUserByIdUseCase'
import { NotFound } from '@/shared/errors/dto/NotFound'
import { HttpRequest } from '@/application/protocols'
import { LoginUserController } from '@/application/controllers/LoginUserController'
import {ICEPProvider} from '@/shared/providers/CEPProvider/ICEPProvider'
import {CEPProvider} from '@/shared/providers/CEPProvider/CepProvider'

let createUserUseCase: ICreateUserUseCase
let updateUserUseCase: IUpdateUserUseCase
let listUserUseCase: IListUsersUseCase
let listUserByIdUseCase: IListUserByIdUseCase
let deleteUserByIdUseCase: IDeleteUserByIdUseCase
let loginUserController: LoginUserController;
let cepProvider: ICEPProvider;

describe('[User] UseCase Unit Tests', () => {
  test('should be able to create a user', async () => {
    const repo = new PrismaUserRepository()
    createUserUseCase = new CreateUserUseCase(repo)

    const user = await createUserUseCase.execute({
      name: 'User Test',
      pass: "Pass Test",
    })

    expect(user).toHaveProperty('id')
  })

  test('should be able to update a user', async () => {
    const repo = new PrismaUserRepository()
    createUserUseCase = new CreateUserUseCase(repo)

    const user = await createUserUseCase.execute({
      name: 'User test',
      pass: 'Pass test'
    })

    updateUserUseCase = new UpdateUserUseCase(repo)

    const updated = await updateUserUseCase.execute({
      id: user.id,
      name: 'User Test Updated',
      pass: 'Pass Test Updated'
    })

    expect(updated.name).toBe('User Test Updated')
    expect(updated.pass).toBe('Pass Test Updated')
  })

  test('should be able to list users', async () => {
    const repo = new PrismaUserRepository()
    listUserUseCase = new ListUsersUseCase(repo)

    const users = await listUserUseCase.execute()

    expect(users.length).toBeGreaterThan(0)
  })

  test('should be able to list user by id', async () => {
    const repo = new PrismaUserRepository()
    listUserByIdUseCase = new ListUserByIdUseCase(repo)
    createUserUseCase = new CreateUserUseCase(repo)

    const user1 = await createUserUseCase.execute({
      name: 'User 1',
      pass: 'Pass 1'
    })

    const user2 = await createUserUseCase.execute({
      name: 'User 2',
      pass: 'Pass 2'
    })

    const user = await listUserByIdUseCase.execute({ id: user1.id })

    expect(user.name).toBe('User 1')
  })

  test('should be able to delete user by id', async () => {
    const repo = new PrismaUserRepository()
    deleteUserByIdUseCase = new DeleteUserByIdUseCase(repo)
    createUserUseCase = new CreateUserUseCase(repo)
    listUserByIdUseCase = new ListUserByIdUseCase(repo)

    let error = false

    const user = await createUserUseCase.execute({
      name: 'User Test',
      pass: 'Pass Test'
    })


      await deleteUserByIdUseCase.execute({ id: user.id })

    try {
      await listUserByIdUseCase.execute({ id: user.id })
    } catch (e) {
      error = true
      expect (e).toBeInstanceOf(NotFound)
      expect (e.message).toBe('User not found')
      
    }
  })
})

describe('[CEPProvider]', () => {
  test('should be able to get address by CEP', async () => {
    cepProvider = new CEPProvider()

    const address = await cepProvider.getAddress({ cep: '01001000' })

    expect(address).toHaveProperty('cep')
    expect(address).toHaveProperty('logradouro')
    expect(address).toHaveProperty('bairro')
    expect(address).toHaveProperty('localidade')
    expect(address).toHaveProperty('uf')
  })
})

describe('[LoginUserController]', () => {
  test('should be able to login', async () => {
    loginUserController = new LoginUserController()

    const httpRequest: HttpRequest = {
      body: {
        name: 'User Test',
        pass: 'Pass Test'
      }

    }

    const response = await loginUserController.handle(httpRequest)

    expect(response.body).toHaveProperty('token')
  })
})

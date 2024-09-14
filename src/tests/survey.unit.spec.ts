// import { TargetAudience } from '@/application/controllers/dto/CreateUserDTO'
// import { CreateUserUseCase } from '@/application/useCases/CreateUserUseCase'
// import { ICreateUserUseCase } from '@/application/useCases/interfaces/ICreateUserUseCase'
// import { IListUserUseCase } from '@/application/useCases/interfaces/IListUserUseCase'
// import { IUpdateUserUseCase } from '@/application/useCases/interfaces/IUpdateUserUseCase'
// import { ListUsersUseCase } from '@/application/useCases/ListUsersUseCase'
// import { UpdateUserUseCase } from '@/application/useCases/UpdateUserUseCase'
// import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository'

// let createUserUseCase: ICreateUserUseCase
// let updateUserUseCase: IUpdateUserUseCase
// let listUserUseCase: IListUserUseCase

// describe('User UseCase Unit Tests', () => {
//   test('should be able to create a user', async () => {
//     const repo = new PrismaUserRepository()
//     createUserUseCase = new CreateUserUseCase(repo)

//     const user = await createUserUseCase.execute({
//       title: 'User Test',
//       target_audience: TargetAudience.atletas
//     })

//     expect(user).toHaveProperty('id')
//   })

//   test('should be able to update a user', async () => {
//     const repo = new PrismaUserRepository()
//     createUserUseCase = new CreateUserUseCase(repo)

//     const user = await createUserUseCase.execute({
//       title: 'User Test',
//       target_audience: TargetAudience.atletas
//     })

//     updateUserUseCase = new UpdateUserUseCase(repo)

//     const updated = await updateUserUseCase.execute({
//       id: user.id,
//       email: 'User Test Updated',
//       star_quantity: 5
//     })

//     expect(updated.star_quantity).toBe(5)
//     expect(updated.email).toBe('User Test Updated')
//   })

//   test('should be able to list users', async () => {
//     const repo = new PrismaUserRepository()
//     createUserUseCase = new CreateUserUseCase(repo)

//     await createUserUseCase.execute({
//       title: 'User Test',
//       target_audience: TargetAudience.atletas
//     })

//     listUserUseCase = new ListUserUseCase(repo)

//     const users = await listUserUseCase.execute({
//       target_audience: TargetAudience.atletas,
//       direction: 'asc'
//     })

//     expect(users.length).toBeGreaterThan(0)
//   })
// })

import { adaptRoute } from '@/main/adapter/express-adapter-route'
import { Router } from 'express'
import { container } from 'tsyringe'
import validateDTO from './validation'
import validationToken from './validationToken'

import { CreateUserController } from '../controllers/CreateUserController'
import { CreateUserDTO } from '../controllers/dto/CreateUserDTO'

import { ListUsersController } from '../controllers/ListUsersController'

import { UpdateUserController } from '../controllers/UpdateUserController'
import { UpdateUserDTO } from '../controllers/dto/UpdateSurveyDTO'

import { DeleteByIdController } from '../controllers/DeleteByIdController'
import { DeleteUserByIdDTO } from '../controllers/dto/DeleteUserByIdDTO'

import {ListUserByIdController} from '../controllers/ListUserByIdController'
import { ListUserByIdDTO } from '../controllers/dto/ListUserByIdDTO'
import { LoginUserController } from '../controllers/LoginUserController'

import { CepController } from '../controllers/CepController'

const createUserController = container.resolve(CreateUserController)
const updateUserController = container.resolve(UpdateUserController)
const listUserController = container.resolve(ListUsersController)
const listUserByIdController = container.resolve(ListUserByIdController)
const deleteUserController = container.resolve(DeleteByIdController)
const loginController = container.resolve(LoginUserController)
const cepController = container.resolve(CepController)
// const exportUserController = container.resolve(ExportUserController)

export default (router: Router): void => {
  router.post('/login', adaptRoute(loginController))
  router.get('/cep', adaptRoute(cepController))

  router.use(validationToken());

  router.post(
    '/user',
    validateDTO(CreateUserDTO),
    adaptRoute(createUserController)
  )

  router.put('/user', 
    validateDTO(UpdateUserDTO),
    adaptRoute(updateUserController))

  router.get(
    '/user',
    adaptRoute(listUserController)
  )

  router.get(
    '/user/:id', 
    validateDTO(ListUserByIdDTO),
    adaptRoute(listUserByIdController)
  )

  router.put(
    '/user/:id', 
    validateDTO(UpdateUserDTO),
    adaptRoute(updateUserController)
  )

  router.delete(
    '/user/:id',
    validateDTO(DeleteUserByIdDTO),
    adaptRoute(deleteUserController)
  )

 


  // router.get('/export', adaptRoute(exportUserController))
}

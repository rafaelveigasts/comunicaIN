import { adaptRoute } from '@/main/adapter/express-adapter-route'
import { Router } from 'express'
import { container } from 'tsyringe'
import { CreateUserController } from '../controllers/CreateUserController'
import { CreateUserDTO } from '../controllers/dto/CreateUserDTO'
import { ListUsersController } from '../controllers/ListUsersController'
import { UpdateUserController } from '../controllers/UpdateUserController'
import { MiddlewareUtils } from '../middlewares/MiddlewareUtils'
import validateDTO from './validation'
import { UpdateUserDTO } from '../controllers/dto/UpdateSurveyDTO'

const createUserController = container.resolve(CreateUserController)
const updateUserController = container.resolve(UpdateUserController)
const listUserController = container.resolve(ListUsersController)
// const exportUserController = container.resolve(ExportUserController)

export default (router: Router): void => {
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

  // router.get('/export', adaptRoute(exportUserController))
}

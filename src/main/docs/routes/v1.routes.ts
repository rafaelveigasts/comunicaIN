import { createUser, listUsers, updateUser } from '../paths/'

export const v1SwaggerRoutes = {
  '/user': {
    ...listUsers,
    ...createUser,
    ...updateUser
  }
}

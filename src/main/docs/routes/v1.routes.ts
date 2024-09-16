import { createUser, listUsers, updateUser,listUserById, deleteUserById, userLogin, getCep} from '../paths/'

export const v1SwaggerRoutes = {
  'login': userLogin,
  '/cep/{cep}': getCep,
  '/user': createUser,
  '/users': listUsers,
  '/user/{id} {put}': updateUser,
  '/user/{id}/': listUserById,
  '/user/{id}': deleteUserById,

}

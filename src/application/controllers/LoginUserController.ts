import { injectable } from 'tsyringe'
import { CreateUserInput } from '../repository/UserRepository'
import { ok } from '../helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocols'
import jwt from 'jsonwebtoken'

@injectable()
export class LoginUserController implements Controller {
  constructor() {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name, pass }: CreateUserInput = httpRequest.body

    const token = jwt.sign({ name, pass }, 'senha_secreta', { expiresIn: '1h' })
    return ok({ token })
  }
}

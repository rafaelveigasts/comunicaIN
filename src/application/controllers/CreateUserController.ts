import { inject, injectable } from 'tsyringe'
import { ICreateUserUseCase } from '../useCases/interfaces/ICreateUserUseCase'
import { CreateUserInput } from '../repository/UserRepository'
import { ok } from '../helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocols'

@injectable()
export class CreateUserController implements Controller {
  constructor(
    @inject('ICreateUserUseCase')
    private createUserUseCase: ICreateUserUseCase
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { name }: CreateUserInput = httpRequest.body

    const User = await this.createUserUseCase.execute({
      name
    })

    return ok(User)
  }
}

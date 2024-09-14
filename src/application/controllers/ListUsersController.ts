import { inject, injectable } from 'tsyringe'
import { IListUsersUseCase } from '../useCases/interfaces/IListUsersUseCase'
import { ok } from '../helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocols'

@injectable()
export class ListUsersController implements Controller {
  constructor(
    @inject('IListUsersUseCase')
    private listUserUseCase: IListUsersUseCase
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const users = await this.listUserUseCase.execute()

    return ok(users)
  }
}

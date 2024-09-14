import { inject, injectable } from 'tsyringe'
import { ok } from '../helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocols'
import { IListUserByIdUseCase } from '../useCases/interfaces/IListUserByIdUseCase'

@injectable()
export class ListUserByIdController implements Controller {
  constructor(
    @inject('IListUserByIdUseCase')
    private listUserByIdUseCase: IListUserByIdUseCase
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const { id } = httpRequest.query
    const user = await this.listUserByIdUseCase.execute(id)

    return ok(user)
  }
}


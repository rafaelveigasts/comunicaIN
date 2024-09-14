import { inject, injectable } from 'tsyringe'
import {  okNoContent } from '../helpers'
import { Controller, HttpRequest, HttpResponse } from '../protocols'
import { IDeleteUserByIdUseCase } from '../useCases/interfaces/IDeleteUserByIdUseCase'

@injectable()
export class DeleteByIdController implements Controller {
  constructor(
    @inject('IDeleteUserByIdUseCase')
    private deleteUserByIdUseCase: IDeleteUserByIdUseCase
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const { id } = httpRequest.params

    await this.deleteUserByIdUseCase.execute(id)

    return okNoContent()
  }
}


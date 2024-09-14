import { Controller, HttpRequest, HttpResponse } from '../protocols'
import { inject, injectable } from 'tsyringe'
import { ok } from '../helpers'
import { UpdateUserInput } from '../repository/UserRepository'
import { IUpdateUserUseCase } from '../useCases/interfaces/IUpdateUserUseCase'
import { UpdateUserDTO } from './dto/UpdateSurveyDTO'

@injectable()
export class UpdateUserController implements Controller {
  constructor(
    @inject('IUpdateUserUseCase')
    private updateUserUseCase: IUpdateUserUseCase
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const { id, name, pass }: UpdateUserDTO = httpRequest.body

    const user = await this.updateUserUseCase.execute({
      id,
      name,
      pass
    })

    return ok(user)
  }
}

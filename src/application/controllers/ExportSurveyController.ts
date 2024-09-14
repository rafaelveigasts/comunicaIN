import { inject, injectable } from 'tsyringe'
import { IListUserUseCase } from '../useCases/interfaces/IListUsersUseCase'
import { ListUserInput } from '../repository/UserRepository'
import * as fs from 'fs'
import * as csv from 'fast-csv'
import { Controller, HttpRequest, HttpResponse } from '../protocols'
import { createdOk } from '../helpers'

@injectable()
export class ExportUserController implements Controller {
  constructor(
    @inject('IListUserUseCase')
    private listUserUseCase: IListUserUseCase
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { target_audience, direction }: ListUserInput = httpRequest.body

    const user = await this.listUserUseCase.execute({
      target_audience,
      direction
    })

    const ws = fs.createWriteStream('./assets/user.csv')
    csv.write(user, { headers: true }).pipe(ws)

    return createdOk(ws)
  }
}

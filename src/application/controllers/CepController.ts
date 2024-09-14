import { ICEPProvider } from "@/shared/providers/CEPProvider/ICEPProvider"
import { ok } from "../helpers/httpHelper"
import { Controller, HttpRequest, HttpResponse } from "../protocols"
import { inject, injectable } from "tsyringe"

@injectable()
export class CepController implements Controller {
  constructor(
    @inject('ICEPProvider')
    private readonly cepProvider: ICEPProvider) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { cep } = httpRequest.body
    const address = await this.cepProvider.getAddress({ cep })
    return ok(address);
  }
}
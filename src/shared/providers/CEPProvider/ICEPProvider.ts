import { AddressDTO, InputAddressDTO } from "./DTO/addressDTO";

export abstract class ICEPProvider {
  abstract getAddress({cep}: InputAddressDTO): Promise<AddressDTO>
}
import axios from "axios";
import { AddressDTO, InputAddressDTO } from "./DTO/addressDTO";
import { ICEPProvider } from "./ICEPProvider";

export class CEPProvider implements ICEPProvider{
  async getAddress({cep}: InputAddressDTO): Promise<AddressDTO> {
    const {data} =  await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    return data as AddressDTO
      
  }
}
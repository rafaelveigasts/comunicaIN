import { IsString, isString } from "class-validator"

export class AddressDTO {
  @IsString()
  cep: string
  @IsString()
  logradouro: string
  @IsString()
  complemento: string
  @IsString()
  bairro: string
  @IsString()
  localidade: string
  @IsString()
  uf: string
  @IsString()
  estado: string
  @IsString()
  regiao: string
  @IsString()
  ibge: string
  @IsString()
  gia: string
  @IsString()
  ddd: string
  @IsString()
  siafi: string
  
}

export class InputAddressDTO implements Pick<AddressDTO, 'cep'> {
  @IsString()
  cep: string
}


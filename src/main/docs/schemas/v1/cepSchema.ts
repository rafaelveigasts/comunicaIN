export const cepSchema = {
  type: 'object',
  properties: {
    cep: { type: 'string' },
    logradouro: { type: 'string' },
    complemento: { type: 'string' },
    bairro: { type: 'string' },
    localidade: { type: 'string' },
    uf: { type: 'string' },
    estado: { type: 'string' },
    regiao: { type: 'string' },
    ibge: { type: 'string' },
    gia: { type: 'string' },
    ddd: { type: 'string' },
    siafi: { type: 'string' }
  }
}
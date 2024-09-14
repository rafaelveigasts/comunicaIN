export const updateUser = {
  put: {
    tags: ['User'],
    summary: 'API para atualizar um usuário',

    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        description: 'Id da usuário',
        example: 'uuid'
      },
      {
        in: 'body',
        name: 'name',
        required: true,
        description: 'nome do usuario',
        example: 'John Doe'
      },
      {
        in: 'body',
        name: 'pass',
        required: true,
        description: 'password do usuário',
      }
    ],

    responses: {
      200: {
        description: 'Ok'
      },

      400: {
        description: 'Requisição inválida',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                error: {
                  type: 'string'
                },
                code: {
                  required: false,
                  type: 'string'
                }
              },
              required: ['error']
            }
          }
        }
      },
      401: {
        description: 'Credenciais inválidas',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/error'
            }
          }
        }
      },
      403: {
        description: 'Credenciais inválidas',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/error'
            }
          }
        }
      },
      404: {
        description: 'API não encontrada'
      },
      500: {
        description: 'Erro interno no servidor',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                error: {
                  type: 'string',
                  example: 'Protocol does not exist in scheduled agendamentos list'
                }
              }
            }
          }
        }
      }
    }
  }
}

export const userLogin = {
  post: {
    tags: ['Login'],
    summary: 'API para logar um usuário',

    parameters: [
      {
        in: 'body',
        name: 'name',
        required: true,
        description: 'Nome do usuário'
      },
      {
        in: 'body',
        name: 'pass',
        required: true,
        description: 'password do usuário'
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createUserResponse'
          }
        }
      }
    },

    responses: {
      200: {
        description: 'Ok',
          content: {
          'application/json': {
            type: 'object',
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                  example: 'eyJhbGciOi'
                }
              }
            }
          }
        }
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

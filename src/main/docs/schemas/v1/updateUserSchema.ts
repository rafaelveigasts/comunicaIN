export const updateUserSchema = {
  type: 'object',
  properties: {
    id: { type: 'string', example: 'uuid' },
    name: { type: 'string', example: 'John Doe' },
    pass: { type: 'string', example: '123456' }
  }
}

export const updateUserResponse = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    pass: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
}

export const createUserSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    pass: { type: 'string' }
  }
}

export const createUserResponse = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    pass: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
}

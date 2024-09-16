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
    name: { type: 'string' },
    pass: { type: 'string' }
  }
}

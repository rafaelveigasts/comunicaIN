export const listUserSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    pass: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
}

export const listUserResponse = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    name: { type: 'string' },
    pass: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
}

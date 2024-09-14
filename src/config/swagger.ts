import swaggerconfig, { options } from '@/main/docs'
import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/teste_comunicaIN/docs', serve, setup(swaggerconfig, options))
}


import paths from './paths'
import schemas from './schemas'

export default {
  openapi: '3.0.1',

  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },

  info: {
    title: 'API de usuários',
    description: 'Teste desenvolvedor backend Cominuca.In',
    version: '1.0.0'
  },
  externalDocs: {
    description: 'Link para o contato',
    url: 'https://www.linkedin.com/in/rafaelveigasts/'
  },
  servers: [
    {
      url: '/teste_comunicain',
      description: 'Servidor Principal'
    }
  ],

  paths,
  schemas
}

export const options = {
  customSiteTitle: `API para usuários`,
  showExplorer: true
}

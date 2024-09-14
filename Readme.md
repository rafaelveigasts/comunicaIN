Teste Desenvolvedor backend

1. instale as dependências
   1. **npm i | yarn**
2. suba o servidor
   1. **npm run dev**
      1. esse comando irá subir o banco com docker compose
3. rode as migrations
   1. **npx prisma migrate dev**
      1. será criado um usuário "Seed" com a senha 123456
4. Autentique na rota /login para gerar o token e liberar as rotas.

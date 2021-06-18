# ProjExt-web
## Gerenciador de livros
Uma aplicação que permite ao usuário gerenciar os livros que está lendo ou que já leu.
## Funcionalidades pretendidas
- [ ] Login / Logout
- [ ] Adicionar um novo livro
  - [ ] Nome do livro
  - [ ] Descrição sobre o livro
- [ ] Ver informações de um livro cadastrado
- [ ] Editar informações de um livro cadastrado
- [ ] Remover um livro adicionado
- [ ] Ver uma lista com todos os livros adicionados pelo usuário
- [ ] Ver livros por gênero/categoria

## Tecnologias usadas
<p align='center'>
    <a href="https://www.python.org/">
        <img src='https://img.shields.io/badge/python-3776AB?logo=python&logoColor=white&style=for-the-badge' />
    </a>
    <a href="https://www.djangoproject.com/">
        <img src='https://img.shields.io/badge/django-092E20?logo=django&logoColor=white&style=for-the-badge' />
    </a>
    <a href="https://www.postgresql.org/">
        <img src='https://img.shields.io/badge/postgresql-4169E1?logo=postgresql&logoColor=white&style=for-the-badge' />
    </a>
    <a href="https://www.docker.com/">
        <img src='https://img.shields.io/badge/docker-2496ED?logo=docker&logoColor=white&style=for-the-badge' />
    </a>
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
        <img src='https://img.shields.io/badge/javascript-F7DF1E?logo=javascript&logoColor=white&style=for-the-badge'>
    </a>
    <a href="https://vuejs.org/">
        <img src='https://img.shields.io/badge/vuejs-4FC08D?logo=vue.js&logoColor=white&style=for-the-badge'>
    </a>
</p>

## Preparando o ambiente

## Backend
Para executar o projeto backend vamos entrar na pasta backend:
```bash
cd backend
```

Nesse projeto usamos o docker. Para tudo funcionar como devia precisamos criar uma variável de ambiente chamada `.env` seguindo o mesmo padrão do arquivo `env.example`, então vamos copiar o conteúdo do exemplo para o arquivo principal:
```bash
cp env.example .env
```
Agora o arquivo `.env` deve ter o seguinte conteúdo:
```
BACKEND_PRODUCTION=False
BACKEND_SECRET_KEY=YOUR_SECRET_KEY
BACKEND_DATABASE_NAME=YOUR_DB_NAME
BACKEND_DATABASE_USER=YOUR_DB_USER
BACKEND_DATABASE_PASSWORD=YOUR_DB_PASSWORD
BACKEND_DATABASE_HOST=YOUR_DB_HOST
BACKEND_DATABASE_PORT=YOUR_DB_PORT
```
Com isso basta substituir pelas informações corretas para o seu ambiente de desenvolvimento.

### Usando o docker
Vamos usar o docker compose para orquestrar nossos containers.

Temos dois containers, um para o PostgreSQL chamado de `db` e outro para o Django chamado de `web`.

Para executar eles vamos usar o docker compose, podemos usar o seguinte comando na raiz do projeto:
```bash
docker-compose up
```
O comando acima irá executar o container `db` e em seguida o container `web`.

Porém nossa api ainda não estará funcionando já que não fizemos as migrations no nosso container.

Para isso precisamos da id do nosso container. vamos conseguir elas usando o comando:
```bash
docker container ps
```
Agora vamos procurar o id do container projext-web_web. E com ele vamos executar o comando substituindo CONTAINER_ID pelo id que conseguimos anteriormente:
```bash
docker exec -it CONTAINER_ID /bin/sh
```
Agora vamos fazer as migrações:
```bash
python backend/manage.py migrate
```
Com isso nosso projeto deve estar rodando normalmente ao executar o nosso docker compose.

## Frontend
Para executar o projeto frontend vamos entrar na pasta frontend:
```bash
cd frontend
```

Agora vamos instalar as dependências:
```bash
# npm
npm install

# yarn
yarn
```

Após instalar vamos executar o server
```bash
# npm
npm run serve

# yarn
yarn serve
```
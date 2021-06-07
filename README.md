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
</p>

## Preparando o ambiente
Para projetos python o recomendável é utilizar uma venv para organizar as dependências do projeto. Para criar um ambiente virtual python:
```bash
python3 -m venv env
```
Após criar o ambiente virtual basta ativar
```bash
env/bin/activate
```
### Instalando dependências
Agora vamos instalar as dependências do projeto, mas primeiro vamos atualizar o pip do ambiente virtual:
```bash
python3 -m pip install --upgrade pip
```
Após atualizar o pip vamos instalar as dependências assim:
```bash
pip install -r requirements.txt
```
### Executando o projeto
Agora vamos entrar no diretório principal
```bash
cd backend/
```
E vamos realizar as migrações:
```bash
python manage.py migrate
```
Com as migrações feitas podemos executar o nosso servidor com o seguinte comando:
```bash
python manage.py runserver
```

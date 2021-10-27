# CURSO ALURA - NestJS

> Curso realizado no dia 26-10-2021.


## LIVRARIA
- [x] Endpoint para Consulta Geral;
- [x] Endpoint para Consulta de um Registro;
- [x] Endpoint para Criação de um Registro;
- [x] Endpoint para Atualização de um Registro;
- [x] Endpoint para Exclusão de um Registro;


## Estrutura do projeto
``` bash
  src/
    |__ app.module.ts # configurações geral do projeto, importação dos controllers, providers e configuração do banco.
    |__ livro.model.ts # configurações dos campos e tabelas do banco de dados
    |__ livros.controller.ts # configuração do endereço da URL e definição das funções
    |__ livros.service.ts # configuração das regras de negócio
    |__.env # arquivo que define as configuralções de conexão ao banco de dados do projeto...
```


# Ferramentas Utilizadas:

## NodeJS:
https://nodejs.org/en/download/

## Git:
https://git-scm.com/downloads

## Postman:
https://www.getpostman.com/



# Comandos para Rodar o Projeto Localmente:

## Instalação do NESTJS
``` bash

Ctrl + Ponto: Sugestão de IMPORT do VS Code

# Rodar a Instalação
npm install -g @nestjs/cli

# Verificar a versão do Nest
nest -v

# Criar o projeto chamado de livros-api.
nest new livros-api

# Instalar Sequelize
# https://docs.nestjs.com/techniques/database#sequelize-integration
npm install --save @nestjs/sequelize sequelize sequelize-typescript mysql2

# Instalar as Configurações
# https://docs.nestjs.com/techniques/configuration
npm i --save @nestjs/config

# Ajustar a porta que o servidor irá utilizar no arquivo \src\main.ts
# Exemplo definindo a porta 3005
await app.listen(3005);

# Iniciar o servidor web com o Vue
npm start

```


## Tabelas do Banco de Dados
``` bash

# livros
-id
-codigo
-nome
-preco
-createdAt
-updatedAt

```
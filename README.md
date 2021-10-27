# CURSO ALURA - NestJS

> Curso realizado no dia 26-10-2021.


## ÁREA DO ALUNO
- [x] Página de Login para Aluno;
- [x] Página para Recuperar a Senha;
- [x] Página para Trocar a Própria Senha;
- [x] Página Inicial com Cards para Acesso aos Recursos;
- [x] Página para Vídeos de Fonoaudiologia
- [x] Página para Vídeos de Aprendizado Participativo;
- [x] Página para Listar os Livros e Selecionar (Vídeos / Podcasts / Apostilas);
- [x] Página para Listar e Reproduzir os Podcasts do Livro (não chega a nível Unidade/Lições/Aulas);
- [x] Página para Listar e Abrir as Apostilas em PDF (não chega a nível Unidade/Lições/Aulas);
- [x] Página para Listar as Unidades, Lições e Aulas do Livro;
- [x] Página para Reproduzir as Aulas;

## ÁREA ADMINISTRATIVA (COLÉGIO)
- [x] Página de Login para Colégio;
- [x] Página para as Séries;
- [x] Página para Cadastrar Alunos na Plataforma;
- [x] Página para Trocar Senha dos Alunos na Plataforma;
- [x] Relatório em Excel: Alunos x Vídeo Acessado;
- [x] Relatório em Excel: Alunos x Acesso a Plataforma;
- [x] Página para Trocar a Própria Senha;


## Estrutura do projeto
``` bash
  dist/ # gerado o build que será publicado em produção...
  static/ # favicon
  webservice/ # backend - API laravel
  |         |__ app # logo, background, imagens e etc...
  |         |   |__ models # models...  
  |         |   |__ notifications # configuração da notificação enviada via email...  
  |         |   |__ http
  |         |       |__ controllers # controllers... 
  |         |__ config # configuração de autenticação, cors, banco de dados, email, etc...
  |         |__ database # configuração de autenticação, cors, banco de dados, email, etc...
  |         |   |__ migrations # migrations responsaveis pela criação do banco de dados...  
  |         |__ public # onde são gravados as apostilas e os podcasts...
  |         |__ routes # rotas onde são definidos os endpoints da api...
  |         |__ .env # arquivo que define algumas configuração gerais do projeto...
  src/
    |__ assets # logo, background, imagens e etc... 
    |__ components # componentes do projeto, ex.: cards, models, grids, progress bar... 
    |__ router # vue-router
    |__ store  # vuex store
    |__ pages # telas do projeto, ex.: aluno, colegio, admin, etc...
```


# Ferramentas Utilizadas:
## Composer:
https://getcomposer.org/download/

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

# Criar o projeto chamado de produtos-api.
nest new produtos-api

# Ajustar a porta que o servidor irá utilizar no arquivo \src\main.ts
# Exemplo definindo a porta 3005
await app.listen(3005);

# Iniciar o servidor web com o Vue
npm start

```


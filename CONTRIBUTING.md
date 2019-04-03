# 2019.1 Grupo 2

Links úteis:
 - [Documentação (Wiki)](#documentação)
 - [Features](#features)
 - [Issues](#issues)
 - [Pull Requests](#pull-requests)

## Desenvolvimento

  1. Clone o repositório
  ```bash
  git clone https://github.com/fga-eps-mds/2019.1-Grupo-2.git
  ```
  2. Abra o projeto [2019.1-Grupo-2](https://github.com/fga-eps-mds/2019.1-Grupo-2/tree/master)
  3. Faça as suas alterações.
  4. Para validar as suas alterações, rode o docker através dos seguintes comandos:
  ```bash
   $ docker build -t mindsy/angular:latest .
   $ docker run -d --name app-producao -p 80:80  mindsy/angular
  ```
    * Obs: O docker-compose.yml já está em desenvolvimento e será lançado o mais breve possível. 
  
  5. O ambiente para desenvolvimento de versões testes de [Angular](https://github.com/mindsy/AngularTraining) e de [Docker](https://github.com/mindsy/DockerTraining). 
  
  <img src="https://gifimage.net/wp-content/uploads/2018/11/docker-gif-4.gif" width=200px align=center> <img src="http://cameronmcefee.com/img/work/the-octocat/walk-3.gif" width=200px align=center> <img src="https://assets.horsenation.com/wp-content/uploads/2013/08/aa-typing.gif" width=300px align=center> 

## Documentação

Para contribuir com a documentação do projeto, siga as instruções abaixo:

  1. Clone a wiki localmente
  ```bash
  git clone https://github.com/fga-eps-mds/2019.1-Grupo-2.wiki.git
  ```  
  2. Faça as alterações necessárias
  3. Submeta seu pull request

## Features

Para a criação de novas features, deve-se seguir os seguintes passos:

  1. Definir uma issue com um dos templates pré-determinados
  2. Anexar _labels_ relacionadas ao tipo de issue criada
  3. Após aprovação (de preferência em uma Sprint Planing), associar a issue para o desenvolvedor que irá realizá-la
  4. Submeter pull request das alterações realizadas

## Issues

As Issues e Bugs encontrados devem ser reportados baseados nos templates pré determinados encontrados nos links abaixo:
* [Bugs](.docs/ISSUE_TEMPLATE/BUG_REPORT.md)
* [Issues]()

## Pull Requests

A submissão de Pull Requests devem ser feitas através da especificação encontrada [aqui](.docs/PULL_REQUEST_TEMPLATE.md)

# Projeto de Automação de Testes

Este projeto visa a automação de testes end-to-end (e2e) e de API utilizando o Cypress, com o objetivo de validar funcionalidades tanto de uma API quanto da interface de um site. Para a realização dos testes de API, utilizamos a URL http://jsonplaceholder.typicode.com/users, onde serão validadas as operações de GET, POST, PUT e DELETE no endpoint /users.

Além disso, os cenários de testes foram desenvolvidos a partir da análise do protótipo solicitado e estão organizados na pasta integration, permitindo uma fácil navegação e manutenção.


## Objetivo do Projeto

O objetivo deste projeto é desenvolver automações de testes que garantam a funcionalidade e a qualidade tanto de uma API quanto da interface do usuário. 

### 1. Testes de API

Neste cenário, o foco é validar as operações de **GET**, **POST**, **PUT** e **DELETE** na API do [JSONPlaceholder](http://jsonplaceholder.typicode.com/users). As automações têm como objetivo:

- Verificar se a lista de usuários é retornada corretamente ao realizar uma requisição **GET**.
- Testar a criação de um novo usuário através de uma requisição **POST**.
- Validar a atualização de um usuário existente com uma requisição **PUT**.
- Confirmar a exclusão de um usuário utilizando a requisição **DELETE**.

### 2. Testes de Interface (End-to-End)

No segundo cenário, o projeto testa a interação com elementos da interface dos sites[The Internet](https://the-internet.herokuapp.com) e (https://the-internet.herokuapp.com/challenging_dom). As automações devem:

- **Renderização de Elemento Escondido**: Clicar no botão **"Start"** para iniciar o carregamento, aguardar que o elemento oculto seja exibido e validar que o texto **"Hello World!"** foi apresentado.
- **Interação com Botões**: Clicar em todos os três botões visíveis da página e em todos os botões **"edit"** e **"delete"** presentes na grid.

## Pré-requisitos

Antes de iniciar, certifique-se de que você possui as seguintes ferramentas instaladas:

1. **Node.js**: Você pode baixar e instalar o Node.js em [nodejs.org](https://nodejs.org/).
2. **npm**: O npm é instalado automaticamente com o Node.js e é utilizado para gerenciar dependências.
3. **git**: Você pode baixar e instalar o git em (https://git-scm.com/downloads).

Para verificar se o Node.js, o npm e o git estão instalados, execute os seguintes comandos no terminal:
```
node -v
npm -v
git -v
```
## Instalação

Siga os passos abaixo para configurar o projeto:

1. **Clone o repositório**:
```
   git clone https://github.com/SabrinaViecili/test-ene-automation.git
```
2. Acesse o diretório do projeto navegando até a pasta que você acabou de clonar:
```
cd test-ene-automation
```
3. Instale as dependências do projeto executando o seguinte comando para instalar todas as dependências necessárias, incluindo o Cypress:
```
npm install
```
## Execução dos Testes

Após a instalação e configuração, você pode executar os testes de duas maneiras diferentes:

1. Modo Gráfico -
   Para rodar os testes em uma interface gráfica, use o seguinte comando:
```
npx cypress open
```
Isso abrirá o Cypress, onde você poderá visualizar e selecionar quais testes deseja executar. A interface permite que você veja os resultados em tempo real.

2. Modo Headless -
   Para rodar os testes em segundo plano (sem interface gráfica), utilize o seguinte comando:
```
npx cypress run
```
Os resultados dos testes serão exibidos no terminal. Esta opção é útil para integração contínua e automação.

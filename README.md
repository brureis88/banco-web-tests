# banco-web-tests

Projeto de Testes Automatizados com Cypress e JavaScript

## Objetivo
Este projeto foi desenvolvido para demonstrar aos alunos da Mentoria 2.0 como automatizar testes de aplicações web utilizando Cypress. O foco está em boas práticas de organização, uso de Custom Commands e geração de relatórios automatizados.

## Componentes do Projeto
- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar e organizar a automação.
- **cypress-mochawesome-reporter**: Geração de relatórios em HTML dos testes executados.
- **Estrutura de pastas**:
  - `cypress/e2e/`: Testes automatizados (login, transferência, etc).
  - `cypress/fixtures/`: Dados de apoio para os testes.
  - `cypress/support/commands/`: Implementação dos Custom Commands.
  - `cypress/reports/`: Relatórios gerados após execução dos testes.

## Pré-requisitos
- Node.js instalado
- API [banco-api](https://github.com/juliodelimas/banco-api) em execução
- Aplicação Web [banco-web](https://github.com/juliodelimas/banco-web) em execução

## Instalação
1. Clone este repositório:
   ```bash
   git clone https://github.com/brureis88/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes
- Para rodar os testes em modo headless:
  ```bash
  npm test
  ```
- Para abrir o Cypress em modo interativo:
  ```bash
  npm run cy:open
  ```
- Para rodar os testes com interface:
  ```bash
  npm run cy:headed
  ```

## Relatórios
Após a execução dos testes, os relatórios em HTML serão gerados na pasta `cypress/reports/html/index.html`.

## Testes Automatizados
- **login.cy.js**: Testes de autenticação e login.
- **transferencia.cy.js**: Testes de transferência bancária, incluindo cenários de erro e sucesso.

## Custom Commands
Os comandos personalizados estão organizados em:
- `cypress/support/commands/common.js`: Comandos comuns reutilizáveis.
- `cypress/support/commands/login.js`: Comandos para automação de login.
- `cypress/support/commands/transferencias.js`: Comandos para automação de transferências.

Para utilizar um Custom Command, basta chamá-lo nos testes, por exemplo:
```js
cy.login('usuario', 'senha')
```

## Contribuição
Sinta-se à vontade para abrir issues ou pull requests com sugestões e melhorias.

---
Mentoria 2.0 - Automação de Testes com Cypress

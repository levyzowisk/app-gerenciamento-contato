# APLICAÇÃO GERENCIADORA DE LISTA DE CONTATOS

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Mysql](https://img.shields.io/badge/Mysql-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Typescript](https://img.shields.io/badge/Typescript-316192?style=for-the-badge&logo=Typescript&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-316192?style=for-the-badge&logo=Dotenv&logoColor=white)
![Joi](https://img.shields.io/badge/Joi-316192?style=for-the-badge&logo=Joi&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-316192?style=for-the-badge&logo=HTML5&logoColor=white)
![HTML](https://img.shields.io/badge/CSS-316192?style=for-the-badge&logo=CSS&logoColor=white)

Aplicação para gerenciamento de uma lista de contatos.

---
## Integração

Este projeto possui integração total entre o frontend e o backend via API REST.  
Todas as operações de cadastro, edição, exclusão e listagem de contatos são realizadas através de requisições HTTP para a API desenvolvida em Node.js, garantindo comunicação eficiente e validações centralizadas.

O frontend consome os endpoints da API para exibir, criar, editar e excluir contatos, proporcionando uma experiência dinâmica e integrada ao usuário.


## Requisitos

### Backend (Node.js + Express + MySQL)

- API RESTful com as rotas:
  - `POST /contatos`: Adiciona um novo contato.
  - `GET /contatos`: Lista todos os contatos.
  - `PATCH /contatos/:id`: Atualiza um contato existente.
  - `DELETE /contatos/:id`: Exclui um contato existente.
- Validações:
  - Nome: mínimo de duas palavras, cada uma com pelo menos 3 letras.
- Utiliza arquivo `.env` para variáveis de ambiente.

### Frontend (Vue.js 3.x)

- Interface em um único arquivo `.html` usando VueJS via CDN.
- Tela principal com botão "Adicionar" ou símbolo "+".
- Modal para criar/editar contatos, com validações.
- Tabela para listar contatos (nome, telefone, ações).
- Telefone: máscara (xx) xxxx-xxxx, obrigatório, sem letras.
- Linha azul para DDD (11).
- Mensagens de erro e botão de salvar desabilitado até validação.



## Testes Locais

Para rodar o backend localmente, siga os passos abaixo:

1. **Clone o repositório e entre na pasta:**
   ```bash
   git clone https://github.com/levyzowisk/app-gerenciamento-contato.git
   cd app-gerenciamento-contato
   ```

2. **Entre na pasta e instale as dependências:**
   ```bash
   cd api
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com as configurações do banco de dados. Exemplo:
   ```
   DATABASE_URL=mysql://usuario:senha@localhost:3306/nome_do_banco
   ```

4. **Inicie o servidor:**
   ```bash
   npm start
   ```

   ---

## Como rodar o projeto (Frontend)

- Abra o arquivo `index.html` do frontend em seu navegador.
- Não é necessário instalar dependências para o frontend.

---

## Implementações

<details>
<summary><b>Cadastro de contato</b></summary>
<img src="./docs/img/Cadastro.png"/>
<img src="./docs/img/Cadastro2.png"/>
<img src="./docs/img/Cadastro3.png"/>
### `Como usuário, posso cadastrar um novo contato informando nome e telefone.`

---

- <b>Detalhes</b>
  - Todos os campos são obrigatórios.
  - O nome deve conter no mínimo duas palavras, cada uma com pelo menos 3 letras e sem números.
  - O telefone deve seguir a máscara (xx) xxxx-xxxx e não pode conter letras.
  - Caso os dados não atendam aos critérios, mensagens de erro são exibidas e o botão de salvar desabilitado.
  - Após cadastro bem-sucedido, o contato aparece na lista e modal de sucesso confirmando a ação.
  - Os dados são armazenados no banco de dados MySQL.

---
</details>
<br/>

<details>
<summary><b>Edição de contato</b></summary>
<br>
<img src="./docs/img/Atualizar.png"/>

### `Como usuário, posso editar os dados de um contato existente.`

---

- <b>Detalhes</b>
  - Todos os campos são obrigatórios.
  - As mesmas validações do cadastro são aplicadas.
  - O modal de edição é exibido ao clicar em "editar".
  - Após salvar, o contato é atualizado na lista e um modal de sucesso confirmando a ação.

---
</details>
<br/>

<details>
<summary><b>Exclusão de contato</b></summary>
<br>
<img src="./docs/img/Exclusao.png"/>

### `Como usuário, posso excluir um contato da lista.`

---

- <b>Detalhes</b>
  - Ao clicar em "excluir", um modal de confirmação é exibido.
  - Após confirmação, o contato é removido do banco e da lista e um modal de sucesso confirmando a ação.

---
</details>

<br/>

<details>
<summary><b>Listagem de contatos</b></summary>
<br>
<img src="./docs/img/Listagem.png"/>

### `Como usuário, posso visualizar todos os contatos cadastrados em uma tabela.`

---

- <b>Detalhes</b>
  - A tabela exibe nome, telefone e ações (editar/excluir).
  - Se o DDD do telefone for (11), a linha é destacada em azul.
  - A busca e atualização dos dados é feita via API.

---
</details>
<br/>
<details>
<summary><b>Validações e usabilidade</b></summary>
<br>

### `Como usuário, recebo feedback visual sobre erros e só posso salvar quando todos os campos estão válidos.`

---

- <b>Detalhes</b>
  - Mensagens de erro são exibidas abaixo dos campos inválidos.
  - O botão de salvar fica desabilitado até que todos os critérios sejam atendidos.
  - Interface responsiva e amigável, funcionando em navegadores padrão.

---
</details>

## Pontos de Destaque do Projeto

- **Estrutura Modular:** O backend está organizado em camadas (controller, service, repository, middleware, validators), seguindo boas práticas de arquitetura, facilitando manutenção e escalabilidade.

- **Validações Avançadas:** Todas as entradas são validadas, garantindo que nomes e telefones estejam no formato correto antes de serem salvos no banco de dados.

- **Tratamento Centralizado de Erros:** Middleware dedicado para capturar e responder erros de forma padronizada, melhorando a experiência do usuário e a depuração.

- **Prisma ORM:** Utilização do Prisma para integração com MySQL, com migrações versionadas e schema bem definido, tornando o gerenciamento do banco mais seguro e prático.

- **Configuração Segura:** Uso de arquivos `.env` para variáveis sensíveis, com exemplo disponível em `.env.example` para facilitar a configuração inicial.

- **TypeScript:** Projeto desenvolvido em TypeScript, proporcionando maior segurança, tipagem estática e facilidade de manutenção.

- **API RESTful Padronizada:** Endpoints claros e documentados, permitindo fácil integração com qualquer frontend.

- **Scripts de Inicialização:** Comandos simples para instalar dependências, rodar migrações e iniciar o servidor.

- **Frontend Desacoplado:** O frontend consome a API via requisições HTTP, podendo ser facilmente adaptado ou substituído.

---

Esses pontos garantem que o projeto seja seguro, escalável, fácil de configurar e pronto para evoluções futuras.
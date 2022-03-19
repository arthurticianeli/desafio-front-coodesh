# Coodesh Front-end Challenge

Este foi um desafio desenhado pela [**Coodesh**](https://coodesh.com/):
```
"A empresa Pharma Inc, está trabalhando em um projeto em colaboração com sua base de clientes para facilitar a gestão e visualização da informação dos seus pacientes de maneira simples e objetiva em um Dashboard onde podem listar, filtrar e expandir os dados disponíveis.
O seu objetivo nesse projeto, é trabalhar no desenvolvimento do Front end que consumirá a API da empresa Pharma Inc seguindo os requisitos propostos neste desafio."
```
Para construir a solulão foram utilizadas as bibliotecas mais modernas do mercado:

- React
- React Hooks
- Context API
- React Router Dom
- Chakra UI
- Axios
- React Table
- Cypress
```

[**Acesso à demonstração**](https://desafio-front-coodesh-arthurticianeli.vercel.app/)
```

![dashboard](https://github.com/arthurticianeli/desafio-front-coodesh/blob/main/src/img/dashboard.png)
```
![modal](https://github.com/arthurticianeli/desafio-front-coodesh/blob/main/src/img/modal.png)
```

## Rodando o projeto
```
1. Faça o clone do repositório: git clone `git@github.com:arthurticianeli/desafio-front-coodesh.git`;

2. Acesse a pasta do projeto: `cd desafio-front-coodesh`;

3. Instale as dependências: `yarn`;

4. Rode a aplicação: `yarn start`;

6. Rode os testes: `yarn run cypress open`.


# Project development
```
Foi disponibilizada a [**API**](https://randomuser.me/) para gerarmos usuários aleatórios. Estudando a documentação da API, cheguei à seguinte solução para gerar um banco de dados de usuários para popular a aplicação:

- Criei no services uma lista fixa por meio do query **Seed**, nomeada de "fixed" => baseURL: https://randomuser.me/api/?seed=fixed
- Conforme a regra passada, é feita apenas 50 requisições por vez em paginações. => .get(`?page=${page}&results=50`, data)
- Os dados são tratados no próprio context, momento em que são filtrados os usuários sem ID informado, concatenados os nomes e incluído a página da resposta no objeto => filterInvalidID e fixNameAndBirth
- Estabeleci o número máximo de 100 páginas para a API. Essa medida foi tomada para que a busca por um usuário não especificado na API não ocasionasse requisições infinitas => page < 100 ? setPage(page + 1) : setMaxLoaded(true);

O componente Table foi feito por meio da junção dos componentes de tabela do Chakra UI (Table, Thead, Th, Tbody, Td) com a biblioteca React-table que gera a tabela a partir de um array de objetos e possui funções como a de sort.

Quanto ao Modal, este é gerado a partir do ID informado pelo hook useParams. Na montagem do componente é feita uma requisição na API, caso o usuário escolhido esteja nessa lista inicial, ele será renderizado, caso não, o useEffect continua realizando requisições na API até que o usuário seja encontrado.

Para que o modal gere uma URL espefíca para cada usuário foi feita uma rota específica => <Route path="/profile/:page/:id" element={<Modal />} />

Para lidar com a responsividade da tabela, foi passado um flex-direction=column, assim, quando em mobile, os dados serão exibidos em coluna.


### Estrutura dos arquivos:
```
├── DESAFIO-FRONT-COODESH
│   ├── src
│   │   ├──  assets
│   │   │     ├── avatar.png
│   │   │     └── logo.svg
│   │   ├──  components
│   │   │     ├── Header
│   │   │     │     ├── index.jsx
│   │   │     │     └── styles.js
│   │   │     ├── InputSearch
│   │   │     │     └── index.jsx
│   │   │     ├── Skeleton
│   │   │     │     └── index.jsx
│   │   │     └── Table
│   │   │           ├── index.jsx
│   │   │           └── styles.js
│   │   ├──  pages
│   │   │     ├── Home
│   │   │     │     ├── index.jsx
│   │   │     │     └── styles.js
│   │   │     └── ModalUser
│   │   │           ├── index.jsx
│   │   │           └── styles.js
│   │   ├──  providers
│   │   │     ├── ModalUsers
│   │   │     │     ├── index.jsx
│   │   │     │     └── styles.js
│   │   │     ├── TableUsers
│   │   │     │     ├── index.jsx
│   │   │     │     └── styles.js
│   │   │     └── index.jsx
│   │   ├──  routes
│   │   │     └── index.jsx
│   │   ├──  services
│   │   |      └── api.jsx
│   │   ├── App.js
│   │   └── index.js

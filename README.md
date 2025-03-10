# Desafio Técnico - GetDemo

Este repositório contém o projeto desenvolvido para o desafio técnico da GetDemo, elaborado como parte do processo seletivo.


### Funcionalidades Implementadas

1. **Listagem de Demos**: Exibe uma lista de demos disponíveis, que podem ser selecionadas para visualizar seus frames.
2. **Visualização de Frames**: Cada demo possui múltiplos frames, que podem ser visualizados e selecionados para edição.
3. **Renderização de HTML**: O conteúdo do frame é renderizado dentro de um `<iframe>`.
4. **Edição de Frames**: Permite editar o conteúdo de cada frame.
   

## Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para construção da API RESTful.
- **Sequelize**: ORM para interação com o banco de dados.
- **Cors**: Middleware para controle de requisições entre domínios.
- **Body-parser**: Middleware para parsing de corpo de requisição (ajustado para lidar com grandes payloads).

### Frontend

- **React.js**: Biblioteca JavaScript para construção da interface de usuário.
- **Material-UI**: Conjunto de componentes React para interface de usuário.
- **Axios**: Cliente HTTP para comunicação com a API.
- **React Router**: Biblioteca para navegação entre páginas.

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado. Caso não tenha, instale-o.
- **Banco de Dados**: O banco de dados utilizado foi o postgree, com os seguintes dados:

- dialect: 'postgres',
- host: 'localhost', 
- username: 'isaias', 
- password: '123456789', 
- database: 'teste', 



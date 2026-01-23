# ts_alpha

Crie um projeto em TypeScript, instalando as dependências que julgar necessárias. 
Envie um arquivo compactado contendo: 
- o projeto sem o node_modules; 
- um arquivo PDF mostrando requisições para cada uma das rotas que foram desenvolvidas.
 
Orientações sobre o projeto: 
- Desenvolver o Back-End de uma aplicação que permite cadastrar usuário, listar todos os usuários, atualizar usuário, excluir usuário, fazer login e fazer logout. 
- Utilizar o SQLite como gerenciador de banco de dados relacional. Deve-se criar uma tabela “users” com as colunas: “id”, “email”, “name” e “password”. Para registrar ou atualizar um novo usuário, algumas validações devem ser realizadas: 
- O campo “name” deve aceitar apenas letras e espaços em branco, e ter no mínimo 4 caracteres (desconsiderando os espaços em branco). 
- O campo “emaill” deve seguir um padrão válido. 
- O campo “password” deve conter pelo menos uma letra e um número, e ter no mínimo 8 caracteres de comprimento. 
- Requisições para o servidor com um ou mais campos que não estejam de acordo com os critérios especificados, devem receber uma resposta apropriada. 
- Todo o código precisa estar fortemente tipado.
- As rotas que devem ser implementadas: 

1. Cadastro - POST /users/ 
  Recebe: name, email e password; 
  Retorna: id, name, email; 
2. Login - POST /login/ 
  Recebe: email e password; 
  Retorna: id; 
3. Cookie: token = sessionID; 
  Logout - DELETE /logout/ 
  Remove o cookie; 
4. Atualiza usuário - PATCH (autenticada) /users/:id 
  Recebe: name, email e/ou password (não é obrigatório informar todos os campos); 
  Retorna: id, name e email; 
5. Remove usuário - DELETE (autenticada) /users/:id 
  Retorna: id, name e email do usuário excluído;
6. Lista todos os usuários - GET /users/ 
  Retorna: id, name e email de todos os usuários. 
- O PDF deve apresentar cada rota que você executou, fornecendo exemplos tanto de requisições bem-sucedidas, quanto de falhas, permitindo uma visualização clara da validação em ação. Utilize o Postman ou o Insomnia para realizar as requisições.
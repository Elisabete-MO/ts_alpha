# ts_alpha

Crie um projeto em TypeScript, instalando as dependências que julgar necessárias. 
Envie um arquivo compactado contendo: 
- o projeto sem o node_modules; 
- um arquivo PDF mostrando um passo a passo com o build e a execução do código. 
 
Orientações sobre o projeto: 
- Desenvolver uma classe que permita criar “clientes”. Um cliente tem um nome e um saldo. Um cliente pode ver suas informações (nome e saldo), sacar e depositar dinheiro.
- Depois que um cliente é criado, o nome dele não pode ser alterado.
- A única forma de visualizar o nome e o saldo é através da operação que permite ver as próprias informações.
- A operação de depósito só pode ser executada se o valor informado é válido.
- A operação de saque usa, dentro dela, uma operação interna que verifica se o cliente tem saldo suficiente e se o valor informado é positivo. O cliente não tem acesso a essa operação interna.
O código deve criar um cliente e executar cada operação pelo menos duas vezes.
- Todo o código precisa estar fortemente tipado e empregar os conceitos de modificadores de acesso.

Para instalar as dependencias:
``` bash
npm install ts-node typescript @types/node --save-dev
```

Para rodar o projeto: 
``` bash
npm run teste
```
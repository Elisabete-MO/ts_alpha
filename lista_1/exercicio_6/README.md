# ts_alpha

Crie um projeto em TypeScript, instalando as dependências que julgar necessárias. 
Envie um arquivo compactado contendo: 
- o projeto sem o node_modules; 
- um arquivo PDF mostrando um passo a passo com o build e a execução do código. 
 
Orientações sobre o projeto: 
- Desenvolver uma função que recebe dois parâmetros: um personagem; e uma ação. Deve verificar o tipo de ação (obrigatoriamente deve ser utilizado switch na verificação) e, de acordo com ela, imprimir uma mensagem diferente. O teor da mensagem indica quem é o personagem e qual é a ação que ele está realizando. 
- Um personagem é representado por uma tupla de comprimento 3. O primeiro elemento da tupla é a classe do personagem (“Warrior”, “Mage” ou “Archer”). O segundo elemento é o equipamento do personagem (“Sword”,”Staff” ou ”Bow”). O terceiro elemento é a quantidade atual de vida. 
- As possibilidades de ações devem ser representadas através de um enum Action. Os membros do enum e seus respectivos valores, são: "Attack", "Defend", "UseItem" e "Escape". 
- Todo o código precisa estar fortemente tipado.


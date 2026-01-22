# ts_alpha

Crie um projeto em TypeScript, instalando as dependências que julgar necessárias. 
Envie um arquivo compactado contendo: 
- o projeto sem o node_modules; 
- um arquivo PDF mostrando um passo a passo com o build e a execução do código. 
 
Orientações sobre o projeto: 
- Desenvolva uma página web Galeria de Cachorros. Utilize a The Dog Api (https://thedogapi.com/). Consiga uma api key válida.
- No topo da página deve existir: um input que recebe a quantidade desejada de fotos de cachorros; um botão botão para fazer a busca; e um botão para “limpar” a galeria, deixando-a vazia. 
- Caso o número informado seja maior que 10, a galeria deve aplicar paginação. Por exemplo, supondo que o usuário deseje 25 fotos de cachorro, deve aparecer 10 fotos e, em algum local da galeria, deve estar indicado que aquela é a primeira página de 3 (10 na primeira, 10 na segunda e 5 na terceira). Além disso, deve haver algum tipo de recurso que permita o usuário alternar entre as páginas.
- Caso o usuário clique em alguma imagem da galeria, um modal deve ser aberto, mostrando a imagem clicada com um tamanho maior. Clicar fora do modal faz com que ele seja fechado.
- A página deve ser visualmente atraente.
- No Front-End do seu projeto, implemente a validação do campo de entrada referente à quantidade de fotos. Deve receber apenas números positivos. Verifique na documentação da API se existe um limite superior. Caso exista, adicione essa condição na validação. Caso o usuário insira um valor inválido e pressione o botão de buscar as imagens, ele deve receber uma mensagem adequada em formato de modal, indicando os limites válidos.
- Não é necessário implementar um servidor para servir o Front-End. É permitido utilizar a extensão Live Server.
- O PDF com o passo a passo deve conter comentários e imagens demonstrando todas as funcionalidades exigidas.
Todo o código precisa estar fortemente tipado.
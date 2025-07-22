## Exercício 1: Relembrando Funções, Spread e Rest

a. Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

b. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)

## Exercício 2: forEach e map

a. Use map para criar um array de strings formatadas como "Nome do produto - Categoria" para cada produto

b. Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)

c. Combine forEach com um acumulador externo para calcular o valor total de todos os produtos

## Exercício 3: filter e find
a. Use filter para encontrar estudantes inativos

b. Use find para encontrar o estudante com id = 3

c. Use filter para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70

d. Combine filter e map para obter apenas os nomes dos estudantes com média > 85

## Exercício 4: findIndex, some e every 

a. Use findIndex para encontrar a posição da primeira tarefa incompleta

b. Use some para verificar se existe alguma tarefa de baixa prioridade completa

c. Use every para verificar se todas as tarefas de alta prioridade estão incompletas

d. Use findIndex para encontrar a posição de uma tarefa com id = 10. Lide com o caso em que a tarefa não existe (dica: findIndex retorna -1 quando não encontra)

## Exercício 5: Desafio Integrador 

Imagine que você está criando um sistema para uma loja online.

Use os métodos de array para implementar as seguintes funcionalidades:

a. Mostrar uma lista formatada de todos os produtos usando forEach

b. Filtrar produtos que estão em estoque (stock > 0)

c. Filtrar produtos da categoria "Eletrônicos" com preço < 1000

d. Verificar se há algum produto sem estoque

e. Verificar se todos os produtos têm pelo menos uma avaliação (review)

f. Encontrar o índice do produto "Cafeteira"

g. Encontrar o primeiro produto da categoria "Vestuário"

h. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico

i. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"

j. Encontrar o produto com a maior média de avaliações

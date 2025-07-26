//Exercício 2: forEach e map

//a. Use map para criar um array de strings formatadas como "Nome do produto - Categoria" para cada produto
const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

const infoproducts = products.map(product => {
    return {
        nome: product.name,
        categoria: product.category
    };
});

console.log("Nome e categoria dos produtos:\n", infoproducts);

//b. Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)
const taxProducts = products.map((product) => {
  return {
    ...product,
    price: product.price * 1.15 // 15% imposto
  };
});

console.log("\nProdutos com 15% de imposto:");
taxProducts.forEach((product) => {
  console.log(
    `${product.name} - Original: R$${(product.price / 1.15).toFixed(
      2
    )}, Com imposto: R$${product.price.toFixed(2)}`
  );
});

//c. Combine forEach com um acumulador externo para calcular o valor total de todos os produtos
let totalProd = 0;

products.forEach((product) => {
    totalProd += product.price;
});

console.log("\nValor total dos produtos: R$",totalProd.toFixed(2));
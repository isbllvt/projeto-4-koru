// Exercício 5: Desafio Integrador - E-commerce

const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];

// a. Mostrar uma lista formatada de todos os produtos usando forEach
console.log("Lista de produtos:");
inventory.forEach(product => {
    console.log(`ID: ${product.id} | Nome: ${product.name} | Preço: R$${product.price} | Estoque: ${product.stock} | Categoria: ${product.category}`);
});

// b. Filtrar produtos que estão em estoque (stock > 0)
const inStock = inventory.filter(product => product.stock > 0);
console.log("\nProdutos em estoque:", inStock);

// c. Filtrar produtos da categoria "Eletrônicos" com preço < 1000
const cheapElectronics = inventory.filter(product => product.category === "Eletrônicos" && product.price < 1000);
console.log("\nEletrônicos com preço < R$1000:", cheapElectronics);

// d. Verificar se há algum produto sem estoque
const hasOutOfStock = inventory.some(product => product.stock === 0);
console.log("\nHá produto sem estoque?", hasOutOfStock);

// e. Verificar se todos os produtos têm pelo menos uma avaliação (review)
const allHaveReviews = inventory.every(product => product.reviews.length > 0);
console.log("\nTodos têm pelo menos uma avaliação?", allHaveReviews);

// f. Encontrar o índice do produto "Cafeteira"
const cafeteiraIndex = inventory.findIndex(product => product.name === "Cafeteira");
console.log("\nÍndice do produto 'Cafeteira':", cafeteiraIndex);

// g. Encontrar o primeiro produto da categoria "Vestuário"
const firstClothing = inventory.find(product => product.category === "Vestuário");
console.log("\nPrimeiro produto de Vestuário:", firstClothing);

// h. Função de busca por termo no nome
function searchProducts(term) {
    return inventory.filter(product => product.name.toLowerCase().includes(term.toLowerCase()));
}
console.log("\nBusca por 'fone':", searchProducts("fone"));

// i. Calcular média de avaliações e adicionar como "averageRating"
inventory.forEach(product => {
    const sum = product.reviews.reduce((acc, val) => acc + val, 0);
    product.averageRating = (sum / product.reviews.length).toFixed(2);
});
console.log("\nProdutos com média de avaliações:", inventory);

// j. Encontrar o produto com a maior média de avaliações
const topRated = inventory.reduce((best, product) => 
    Number(product.averageRating) > Number(best.averageRating) ? product : best, inventory[0]);
console.log("\nProduto com maior média de avaliações:", topRated);
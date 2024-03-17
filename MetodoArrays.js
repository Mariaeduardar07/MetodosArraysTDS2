// 1º método includes
// O método includes() determina se um array contém um determinado elemento,
// Retornando true ou false apropriadamente

// Exemplo 1
let cor = ['Roxo', 'Rosa', 'amarelo', 'azul', 'verde', 'cinza'];

console.log(cor.includes('azul'));
// true


// Exemplo 2
let país = ["Rússia", "Espanha", "Brasil", "França"];

console.log(país.includes("Itália"));
//false







//2º método concat
// É utilizado o método concat para mesclar dois ou mais arrays.
// Esse método não altera os arrays existentes, mas, em vez disso, retorna um novo array.


// Exemplo 1
let materialEscolar1 = ['lápis', 'borracha', 'caderno', 'post-it'];
let materialEscolar2 = ['apontador', 'lapiseira', 'grafite', 'caneta', 'cola'];
let materialEscolar3 = materialEscolar1.concat(materialEscolar2);

console.log(materialEscolar3)
//['lápis', 'borracha', 'caderno', 'post-it', 'apontador', 'lapiseira', 'grafite', 'caneta', 'cola' ]


// Exemplo 2
let listaDeMercado1 = ['farinha', 'arroz', 'feijão', 'detergente'];
let listaDeMercado2 = ['pão', 'bolacha', 'chá', 'café'];
let listaDeMercado3 = listaDeMercado1.concat(listaDeMercado2);

console.log(listaDeMercado3)
//['farinha', 'arroz', 'feijão', 'detergente', 'pão', 'bolacha', 'chá', 'café']

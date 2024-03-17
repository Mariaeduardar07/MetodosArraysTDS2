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








// 3º  método join()
// Permite unir os elementos de um array em uma única string.


// Exemplo 1
let bolo = ["milho", "chocolate", "morango", "baunilha", "cenoura"];
let resultado = bolo.join("/");

console.log(resultado);
// milho/chocolate/morango/baunilha/cenoura


// Exemplo 2
let animal = ["macaco", "cobra", "baleia", "gamba", "cavalo", "cachorro"];
let solução = animal.join("-");

console.log(solução);
// macaco-cobra-baleia-gamba-cavalo-cachorro







// 4º método reverse
// o metodo reverse inverte os elemntos de um array

// Exemplo 1 
let anosDaCopa = ["2022", "2018", "2014", "2010", "2006", "2002"];
let anosDaCopainvertido = anosDaCopa.reverse();

console.log(anosDaCopa)
// [ '2002', '2006', '2010', '2014', '2018', '2022' ]


// Exemplo 2

let numerosDescrecentes = ["20", "26", "28", "35", "42"];
let numerosDecrecentesInvertido = numerosDescrecentes.reverse()

console.log(numerosDescrecentes)
// [ '42', '35', '28', '26', '20' ]







// 5º metodo sort
// Ordena os elementos do próprio array e retorna o array

// Exemplo 1
let sorvete = ["morango", "avelã", "chocolate", "baunulha", "flocos"];
let resultadoDoSorvete = sorvete.sort();

console.log(resultadoDoSorvete)
// [ 'avelã', 'baunulha', 'chocolate', 'flocos', 'morango' ]


// Exemplo 2
let marca = ["nike", "adidas", "chanel", "balenciaga", "louis vitton"];
let resultadoDeMarca = marca.sort();

console.log(resultadoDeMarca)
// [ 'adidas', 'balenciaga', 'chanel', 'louis vitton', 'nike' ]







// 6º metodo find
// Usaremos o metodo find quando precisamos encontrar um elemento específico dentro de um Array.

// Exemplo 1
let acessorios = ["chapeu", "brinco", "colar", "luva", "relogio", "oculos"];
let acessorio = acessorios.find(A => A.startsWith("c"));

console.log(acessorio)
// chapeu


// Exemplo 2
let aplicativos = ["instagram", "twitter", "skoob", "whatsapp", "Kindle", "facebook", "snapchat"];

let aplicativo = aplicativos.find(A => A.startsWith("s"));

console.log(aplicativo)
// skoob








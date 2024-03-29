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







// 7º metodo shift
// Remove o primeiro elemento do array

//Exemplo 1
let sagaDeLivros = ["jogos vorazes", "Harry Potter", "Percy Jackson", "A rainha vermelha"];
let removeFirstElement = sagaDeLivros.shift();

console.log(sagaDeLivros);
// [ 'Harry Potter', 'Percy Jackson', 'A rainha vermelha' ]


// exemplo 2
let materiaEscolar = ["matematica","fisica", "quimica", "biologia","historia"];
let removeFirstElement1 = materiaEscolar.shift();

console.log(materiaEscolar)
// [ 'fisica', 'quimica', 'biologia', 'historia' ]







// 8º metodo unshift
// Adiciona elementos ao inicio do array

// Exemplo 1
let chocolates = ["bis", "kit kat", "ouro branco"];
chocolates.unshift("hersheys")

console.log(chocolate)
// ["hersheys", "bis", "kit kat", "ouro branco"]

// Exemplo 2
let raçaDeCachorro = ["Poodle", "Lhasa Apso", "golden", "Spitz Alemão",];
raçaDeCachorro.unshift("Husky siberiano");

console.log(raçaDeCachorro)
// ["Husky siberiano", "Poodle", "Lhasa Apso", "golden", "Spitz Alemão]







// 9º  metodo slice
//  Percorre o array para selecionar a faixa de valores determinada por parâmetro
//  Quando utilizamos o numero negativo no metodo array, os elemento são contados no a partir final do array

// Exemplo 1
let familia = ["mãe", "pai", "irmão", "tia", "avó", "avô", "prima"];

console.log(familia.slice(2, 4));
//[ 'irmão', 'tia' ]


// Exemplo 2
let frutas = ["ameixa", "mornago", "maçã", "manga", "pessego"];

console.log(frutas.slice(-3))
//[ 'maçã', 'manga', 'pessego' ]








// 10º metodo every
// O metodo every usamos para testarmos se todos os elementos do Array passam em uma condição. 
// Passamos uma função que retorna true ou false 
// Se todos os retornos forem true , significa que todos os elementos passaram no teste

// Exemplo 1 
let number = [16, 11, 9, 3];

//console.log(number.every(N => N > 18))
// false

// Exemplo 2
let age = ["nome:Maria Eduarda", "Age:16"];

console.log(age.every(I => I > 18))
// false







// Metodo Splice 
// altera o conteúdo de um array
// removendo ou substituindo elementos existentes e adicionando novos elementos no array
// colocamos esses numeros para informar:
// a posição que vamos remover e a quantidade de elemntos que queremos remover

// Exemplo 1
let refrigerante = ['fanta uva', 'coca cola', 'guarana', 'sprite', 'H2O'];
refrigerante.splice(3, 1, "guarana jesus");

console.log(refrigerante);
//[ 'fanta uva', 'coca cola', 'guarana', 'guarana jesus', 'H2O' ]


// Exemplo 2
let objetos = ['abajur', 'almofada', 'escada', 'dado', 'capa', 'mascara'];
objetos.splice(2, 1, "sino");


console.log(objetos);
//[ 'abajur', 'almofada', 'sino', 'dado', 'capa', 'mascara' ]
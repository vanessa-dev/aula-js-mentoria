// Retorne o maior número da lista abaixo
const numeros = [4, 5, 20, 8, 9];
// console.log(Math.max(...numeros));
// Crie uma função para limpar os preços
// e retornar os números  arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];
arrendondaNum = (dados) => {
  let total = 0;
  dados.forEach(element => {
    let valorLimpo = Math.ceil(element.toLowerCase().replace("r$", " ").replace(",",".").trim());
    total += valorLimpo;
  });
  return total;
}

multiplica = (a, b) => a * b;

let n1 = multiplica(10, 20);
// console.log(n1);

let valor = arrendondaNum(listaPrecos);
// console.log(valor);

// console.log(arrendondaNum(listaPrecos));

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso.

let cursos = document.querySelectorAll(".curso");
let cursosMap = Array.from(cursos);

let novosCursos = cursosMap.map(function(item) {
  let titulo = item.querySelector("h1").innerText;
  let descricao = item.querySelector("p").innerText;
  let aulas = item.querySelector(".aulas").innerText;
  let horas = item.querySelector(".horas").innerText; 
  let soma = aulas + horas;
  return {soma};
});

// console.log(novosCursos);
// Retorne uma lista com os
// números maiores que 100
const numeros_novos = [3, 44, 333, 23, 122, 322, 33];
const maiores = numeros_novos.filter(item => item > 100);
// console.log(maiores);
let arrayDoida = [
  [{preco:"R$ 4.50", dados: { tipo: "Fruta", nome: "Pera"}}, ["teste", {loucura: "valha mim"}, [0, 1, 2]], "string", ],
  { teste: "Ok", tes: "Failed", test: [1, 2, 3 , [1, 3 , {nome: "João", data: {idade:13 ,nomeCompleto: {firstName: "toledo", lastName:"Santana"}}}]] } ,
  "string"
];

let objeto = {teste: [{teste:""}, 1, 2], test: {rest: [1,2,3]}, louco: "teste", };

///um array  e um conjunto de valores , mas para voce acessar um array voce acessa por posicao array[posicao].
/// um objeto e um conjunto de valores composto por chave e valor exmpl: fruta: "pera", para acessar um valor de um objeto voce acessa atraves da chave, a chave e o nome que vem antes : objeto.fruta. teste: 

// console.log(arrayDoida[0][0].dados.nome);
// console.log(arrayDoida[1].test[3][2].data.nomeCompleto.lastName);

/////////////////////////////
// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
];

//reduce

let totalCompras = compras.reduce(function(acumulador, item) {
  let valorLimpo = +item.preco.replace("R$", " ").replace(",",".");
  return acumulador + valorLimpo; 
},0);
console.log(totalCompras);

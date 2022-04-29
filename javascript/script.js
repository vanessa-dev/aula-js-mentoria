//Metdos de array para iteração
//ForEach
//map
//find
//findIndex
//filter
const transacoes = [2, 3, 4, 5, 6 ,7 ,9, 25, 35];
const frutas = ["Uva", "Maçã", "Pera", "Melao", "Jabuticaba"];
const interacao1 = transacoes.forEach(function (item) {
  return item + "a";
});

const arrayWithoutTax = frutas.map(function (item) {
  return item.trim().substring(4);
});

const temFruta = transacoes.findIndex((item) => {
  return item > 9;
});

const numerosMaiorCinco = transacoes.filter(function(item) {
  return item > 5;
});


//Metodos de funcao
const novasNotas = {
  nome: "teste2",
  nota: 7.8,
}

// window.prototype.nome;
function notas() {
  console.log(this);
  return {
    nome: "teste",
    nota: 7.5,
    frase: "Aluno " + this.nome + " tirou nota " + this.nota
  }
}
// console.log(notas.call(novasNotas));


// console.log(numerosMaiorCinco);
// console.log( Math.max(...transacoes));

//Funcao de contrutora

function Carro(marca, modelo, ano){
  this.marca = marca
  this.modelo = modelo
  this.ano = ano
}

const carro = {
  marca: "Honda", ///caracteristicas
  modelo: "afaffa",
  ano: 1998,
  acelera () { //acão

  },
};

const fiat = carro;
fiat.nome = "fiat";
fiat.modelo = "qualquer";

const honda = carro;
honda.nome = "honda";
honda.modelo = "qualque2";
//Atributos e metoodos
///
Object// Atributos e metodos de Object: create(), assign(), defineProperties(), getOwnPropertyDescriptors(), keys(), values(), entries(), getPrototypeOf(), is()
Array//Atributos e metodos de array //find() findIndex() map() filter() push() pop() length
String// Atributos e metodos de string // toLowerCase() toUpperCase() length
Number//Atributos e metodos de number //
Function//Atributos e metodos do Objeto function call(), apply(), bind(), length, name
//
Element
NodeList
// console.log(fiat,honda, carro);

const roupa = {
  tamanho: "P",
  cor: "Azul",
  nome: "Matias",
};
const roupa = {}



const carro1 = new Carro("Honda", "qualquer", 1995);
const carro2 = new Carro("Carro2", "qualquer", 1996);
const carro3 = new Carro("Noovo", "qualquer", 1998);
// console.log(carro1);
carro1.cor = "Bronze";

// console.log(carro1, carro2, carro3);

// Retorne o total de taxas
// const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário taxa', 'TARIFA especial'];
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
];
 
let elemento = document.querySelector("button");
elemento.addEventListener("click",function() {
  
});
// console.dir(elemento);
Window.prototype.tamanho = "M";
Window.prototype.cor = "laranja";
Window.prototype.nome = "Sueleen";
const novoObj = {

}

function escrever(teste, teste2, teste3) {
  console.log(this);
  let tamanho= "P";
  let cor= "Azul";
  let nome= "Vanessa";
  return `${this.nome} está vestindo uma roupa do tamanho ${this.tamanho} e cor ${this.cor}`;
}

const escreverBind = escrever.bind(roupa);
console.log(escrever.name);
// console.log(window);
// console.log(escrever.apply(roupa));
const besta = document.querySelectorAll(".btn");
// console.dir(btnNode);
const btn = document.getElementsByClassName("btn");
let teste = Array.from(btn);

// besta.forEach(function (item) {
//   console.log(item);
// });
teste.forEach( function(item) {
  console.log(item);
});
// btn.forEach(function (item) {
//   console.log(item);
// });
// console.log(btnNode, btn)


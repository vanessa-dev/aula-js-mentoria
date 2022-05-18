// console.log("teste");
// console.log("teste 1");
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(json => console.log(json));
// console.log("teste 2");
// console.log("teste 3");

// const json = '{"teste":"vanessa"}';
// const teste = JSON.parse(json);
// console.log(JSON.stringify(teste));

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

let button = document.querySelector("button");
let input = document.querySelector("input");
let cidade = document.querySelector(".cidade");
let bairro = document.querySelector(".bairro");
let estado = document.querySelector(".estado");

button.addEventListener("click", async function (event) {
  event.preventDefault();
  const endereco = await fetch(`https://viacep.com.br/ws/${input.value}/json/`);
  const dados = await endereco.json();
  cidade.textContent = dados.localidade;
  estado.textContent = dados.uf;
  bairro.textContent = dados.bairro;  
});

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin em reais.
// atualize este valor a cada 30s
const bitcoin = document.querySelector(".bitcoin");
async function valorBitcoin() {
  const valorBitcoin = await fetch("https://blockchain.info/ticker");
  const dados = await valorBitcoin.json();
  bitcoin.innerText = dados.BRL.buy.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
valorBitcoin();
setInterval( async function () {
  valorBitcoin();
}, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const jokes = document.querySelector(".piada");
const next = document.querySelector(".next");

async function piadas () {
  const piada = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await piada.json();
  jokes.innerText = json.value;
}

piadas();

next.addEventListener("click", function () {
 piadas();
});
  
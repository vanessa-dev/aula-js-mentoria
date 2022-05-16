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

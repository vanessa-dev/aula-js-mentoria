console.log("teste");
console.log("teste 1");
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => console.log(json));
console.log("teste 2");
console.log("teste 3");

const json = '{"teste":"vanessa"}';
const teste = JSON.parse(json);
console.log(JSON.stringify(teste));
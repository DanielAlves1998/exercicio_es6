"use strict";

var redesSociais = ['facebook', 'instagram', 'twitter'];

//emquanto o i for < que redesSociais.length; nós incrementamos o i++. o i significa item inicial, no caso o facebook
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil nas redes sociais: ".concat(redesSociais[i]));
}

//aqui é a mesma coisa la de cima, e foi acrecentado o indice que no moceço aparece os numeros na ordem como uma listagem
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  //o forEache ele só intera ele não integra ele não retorna nada
  console.log("#".concat(indice, " Eu tenho perfil nas redes sociais: ").concat(nomeDaRedeSocial));
});

//com o método map podemos fazer o código pelo array mesmo, e criar um npvo array
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner', 'Daniel'];

//e aqui da para manipular no caso itemAtual e o sistema vai gerar um outro array. e aqui estamos formando de um array que só tem strings para um array com objetos
var alunos2 = alunos.map(function (itemAtual) {
  //no map diferente do forEache náo conseguimos fazer a manipulação e ter um novo array como retorno
  return {
    nome: itemAtual,
    curso: 'Front-end'
  };
});
console.log(alunos2);

//essa é uma função para buscar, nesse caso vou buscar a paula de alunos lá em cima. Para buscar um item no array temos que buscar um array
var Paula = alunos2.find(function (item) {
  //find significa busca, com ele nós conseguimos encontrar um item dentro de um array
  return item.nome == 'Paula'; //essa espreção nos retorna um boleano retornando um true ou false
});
console.log(Paula);

//aqui irá retornar o indice do item, nocaso em que posição a Paula está, que é a posição 2
var indiceDaPaula = alunos2.findIndex(function (item) {
  //find significa busca, com ele nós reotoramos um indice dentro de um array
  return item.nome == 'Paula'; //essa espreção nos retorna um boleano retornando um true ou false
});
console.log(indiceDaPaula);

//aqui vou adicionar um curso
alunos2.push({
  //.push é para adicionar um item
  nome: 'Lucio',
  curso: 'Backend'
});

//every é para verificar nesse caso se o aluno faz o curso ou não
var todosOsAlunosSaoDeFrontend = alunos2.every(function (item) {
  // o every vai nos retornar se todas os itens dentro de um array eles satisfazem a uma condição
  return item.curso === 'Front-end'; //se o curso for igual ao item irá me retornar
});
console.log(todosOsAlunosSaoDeFrontend);
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  // o some é mais tolerante que o every, ele precia aenas que um item satisfaça a condição
  return item.curso === 'Backend' && item.curso === 'Front-end'; //o && é para uma segunda condição, seria como o IF
});
console.log(existeAlgumAlunoDeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}

//aqui é o mesmo código que o de cima má em um arrow function, no primeiro aluno da funcão não precisa de parenteses porque só recebe um argumento, só é necesário quando tem 2 ou mais
var filtraAlunosDeBackend2 = function filtraAlunosDeBackend2(aluno) {
  return aluno.curso === 'Backend';
};
var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend); //o filter serve para filtrar itens

console.log(alunosDeBackend);

//esse código faz o calcúlo dos númeos, nocaso uma redução
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  //o reduce faz uma redução de valores
  acumulador += itemAtual;
  return acumulador;
}, 0); //o 0 é o valor inicial

console.log(soma);

//aqui é a mesma coisa de cima mas de um jeito diferente, é uma soma com o FOR
var somaComfor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComfor += nums[_i];
}
console.log(somaComfor);
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " "); //o += serve para agregar valor ao acumulador
  return acumulador;
}, ''); //aqui é uma string vazia então botamos só aspas

console.log(nomesDosAlunos);
var numeros = [1, 2, 3, 4, 5, 6];
var dobroDeNumeros = numeros.map(function (numeroAtual) {
  return numeroAtual * 2;
});
console.log(dobroDeNumeros);
"use strict";

var _this = void 0;
//um arrow function é criado colocando PARENTESES, SINAL DE IGUAL, MAIOR QUE E AS CHAVES para abris o escopo da função: () => {}
var minhaFuncao = function minhaFuncao() {
  return "hiii";
};

//aqui é para retornar um objeto
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'hb20',
    fabricante: 'ford'
  };
};

//para termos um retorno do sistema temos que chamar a função também
console.log(minhaFuncao());
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 90,
  acelerar: function acelerar() {
    //método acelerar
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    //método freiar, usando a errow function
    console.log(_this);
    _this.velocidadeAtual -= 10;
  }
};

//sempre tem que chamar a função
carro.acelerar();
carro.frear();
console.log(carro.velocidadeAtual);
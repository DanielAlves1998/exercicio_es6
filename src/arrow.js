//um arrow function é criado colocando PARENTESES, SINAL DE IGUAL, MAIOR QUE E AS CHAVES para abris o escopo da função: () => {}
const minhaFuncao = () => "hiii";

//aqui é para retornar um objeto
const retornaUmCarro = () => ({
    modelo: 'hb20',
    fabricante: 'ford'
})

//para termos um retorno do sistema temos que chamar a função também
console.log(minhaFuncao());
console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 90,
    acelerar: function() { //método acelerar
        console.log(this)
        this.velocidadeAtual += 10;
    },
    frear: () => { //método freiar, usando a errow function
        console.log(this)
        this.velocidadeAtual -= 10;
    }
}

//sempre tem que chamar a função
carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual);
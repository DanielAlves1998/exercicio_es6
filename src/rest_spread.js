//função para calcular números
function somar(a, b) {
    let soma = 0; // é nessa variavel que vai ficar somando cada argumento

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    //a palavra reservada ARGUMENTS ela retorna todos os argumentos que foram passados na função, e conseguimos receber varios númes
    //console.log(arguments) //esse tipo de estrutura recebe o nome de dcionário porqye ele dá um verbete e uma descrição
    //return a + b;
}

console.log(somar(10, 20, 30))

//soma com a função REST
function somarComRest(...numeros) { //para o pperador rest funcionar tem que colocar ... antes da função, e com essa função podemos receber inúmeros argumentos
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0) //aqui é para o sistema começar como 0
    return soma;
}

console.log(somarComRest(10, 20, 30))

//SPREAD opereitor
const numeros = [1,2,3,4,5]
console.log(...numeros) //aqui é um spread ele é parecido com o rest, o que os diferencia é como se usa eles, o rest se utilisa como argumento de função, e o spread se utiliza para fazer concatenações, console.log, preenchimentos de objetos etc...

const timesDeFutebol1 = ['Fluminence', 'corintians', 'Palmeiras', 'santos'];
const timesDeFutebol2 = ['vasco', 'botafogo', 'flamengo', 'atlético'];

//a função concat é para unir
//const timesDeFutebol = timesDeFutebol1.concat(timesDeFutebol2); //esse arrei vai ter como finalidade juntar os dois arreys de cima

const timesDeFutebol = [...timesDeFutebol1, ...timesDeFutebol2]; //aqui tambêm temos uma união más utilizando o spread

console.log(timesDeFutebol);

//aqui estou utilizando o SPREAD opereitor para não precisar repetir o código
const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = { //com o spread nesse caso foi copiado tudo que tem no cosnt da julia e acrescentado o motor ele automaticamente sobreescreve o de cima
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna)

//DESESTRUTURAÇÃO. com ela conseguimos dar apelidos as variáveis
//const motorDoCarrodaAna = carroDaAna.motor;
const {motor: motorDoCarrodaAna} = carroDaAna; //aqui acecei a propriedade MOTOR do carro da ana, e dei o nome da cosntante de motorDoCarroDaAna
const {motor: motorDoCarroDaJulia} = carroDaJulia;// e aqui em baixo acessei a propriedade motor do carro da julia e atribui uma constante o nome motorDoCarroDaJulia

console.log(motorDoCarrodaAna);
console.log(motorDoCarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol; //com o REST(resto, restante) não precisa ficar colocando inúmeros itens

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrosTimes);
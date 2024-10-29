//o MAP é basicamente um dicionário, ele é um conjunto de valores, esses valores são como objetos
let meuMap = new Map();
meuMap.set("nome", "Daniel");
meuMap.set("stack", "html, css, js"); //o primeiro item é uma chave ela que vai ser chamada para responder por todos os outros objetos

console.log(meuMap);

//para fazer a recuperação de um item se usa o GET, iremos ter o retorno do valor nesse caso é Daniel
const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size)

//para verificar se determinada chave tem existe dentro de uma MAP
console.log(meuMap.has("Daniel"));

//para fazer a limpesa do map, remover tdos os itens de dentro se usa o CLEAR
// meuMap.clear()

console.log(meuMap.size)

//para fazer uma interação no MAP usamos o FOR, ele recupera os valores das chaves com o KEYS
for (let chave of meuMap.keys()) {
    console.log(chave);
}

// e para recuperar os valover das chaves usamos o VALUES
for (let valor of meuMap.values()) {
    console.log(valor);
}

//fazer uma interação pelas entradas usando o ENTRIES
//a entrada é um item, o item é composto pelas chaves e os valores
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

//para remover um item dentro do MAP usamos o DELETE
meuMap.delete("stack");

console.log(meuMap);

    //VOU USAR O SET AGORA, DENTRO DO SET NÃO TEMOS O CONJUNTO DE CHAVE E VALOR, e os valores não podem se repetir
    const cpfs = new Set();

    //para adicionar a função no set se usa o .add
    cpfs.add(96759970012)
    cpfs.add('01410174042') //se usa uma string '' quando os números começam com o 0 a esquerda
    cpfs.add(36824725099)

    console.log(cpfs);

    console.log(cpfs.keys())
    console.log(cpfs.values())

    cpfs.forEach((valor) => {
        console.log(valor);
    })

    //com o SET podemos criar uma listagem de itens únicos, e remover os valores dentro da lista que foram duplicados
    const array = ["Daniel Alves", "Flavia laranjeira", "Maria de Fátima", "luana", "luana", "Daniel Alves"]

    //continuação do código essa parte é converter um array para um SET
    const arrayComSet = new Set([...array]) //os ...pontos é a parte do spreat serve para distribuir ou espalhar dados de um array

    //em cima o array foi transformado em um SET, aqui vamos transformar o SET em um array
    const arraySemItensDuplicados = [...arrayComSet]

    console.log(arrayComSet)// e todo esse código em cima fooi para criar uma lista e remover todos os itens que são iguais
    console.log(arraySemItensDuplicados)

    //o SET é formado entre chaves {}, e o ARRAY utiliza os colchetes [].

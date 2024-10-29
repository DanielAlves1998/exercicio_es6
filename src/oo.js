//essa é chamada de função construtora, oo(orientaçã à objetos)
//function pokemon (NomeDoPokemon, tipoDoPokemon) {
    //this.nome = NomeDoPokemon;
    //this.tipo = tipoDoPokemon;
//}

//const Pikachu = new pokemon("Pikachu", "elétrico")

class Pokemon {
    //EMCAPSULAMENTO
    #hp = 100; //o # torna o código privado, e não tem como alterar ele em nenhuma parte do código

    constructor(nomeDoPokemon, tipoDoPokemon) { //função construtora
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    //MÉTODOS
    atacar(nomeDoAtaque) { //isso aqui já é uma função
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon { //HERANÇA, herança pq tem ele mento pai e filho
    constructor() { //um novo construtor, não precisa passar nenhum argumento porque ja conhecemos
        super('Pikachu', 'elétrico') //esse super é de (superior), é como se fosse uma função
    }

    //POLI MORFISMO, o sistema executa mais de uma função de uma ves
    atacar() { //não precisa de um argumento porque já sei que é o choque do trovão
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const PikachuDoAsh = new Pikachu();

PikachuDoAsh.recebeuAtaque();
PikachuDoAsh.hp = 5000; // como tornei o hp privado lá em cima esse hp que está sendo alterado para o sistema é como se eu estivesse criando um novo hp

console.log(PikachuDoAsh.hp)// vai nis retornar quais são os pontos de hp(vida) que está no momento

PikachuDoAsh.atacar();

PikachuDoAsh.exibeHp();

const pikachu = new Pokemon('pikachu', 'elétrico');//só é possivel colocar os nomes aqui porque foi dado o tipo do construpor lá em cima
//pikachu.atacar('choque do trovão')

//pikachu.nome = 'pikachu'; //aqui estou reescrevendo o nome lá de cima que está vasio só com ''
//pikachu.tipo = 'elétrico';

console.log(pikachu);
console.log(PikachuDoAsh);
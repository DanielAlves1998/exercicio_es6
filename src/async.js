//aqui vou armasenar a qauntidade de veses que o FOR teve a execução 
function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes; //sempre tem que retornar a função se não o código nao funciona
}

//PROMISE significa promessa ,nesse caso o código está disendo: vou fazer um calculo etc.. e quando finalizar eu PROMETO resolver a execução te dando um reotorno(resultado) que no caso são as execucoes se der algum erro eu rejeito a promessa retornando a mensagem de REJECT
const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => { //o RESOLVE será chama do em caso de sucesso, e o REJECT em caso de falha. o=> é uma eron function
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoess++;
        }
        resolve(execucoes); //sempre tem que retornar a função se não o código nao funciona
    }catch(e) {
        reject("Deus erro na interação dos números") //o CATCH é para se der algum erro
    }
})

//nova PROMISE
const promiseComParametros = (loguin, senha) => {
    return new Promise((resolve, reset) => {
        setTimeout(() => { // aqui foi criado o setTimeout e foi passado a função o calbec com () => {} usando o erou function =>, e como segundo argumento passamos o delei no caso 3000 (3 segundos)
            resolve(`Logado com o usuário: ${loguin}`)
        }, 3000)
    })
}


//console.log("inicio")
//console.log(funcaoMuitoPesada()). o catch ele está retornando o erro tratado, o erro do reject
//funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro)) //faz com que o código seja executado de forma paralela
//console.log("fim")

//para fazer com que a função espere a promise se coloca antes da function o ASYNC, e na execução da promise coloca AWAIT(espera), aqui estou disendo que é para esperar essa função e depois continuar
async function execucaoPrincipal() {
    console.log("inicio")

    //execução da segunda PROMISE
    promiseComParametros('daniel@gmail.com', 12341234).then(resultado => {
        console.log(resultado)
    })

    //await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))

    //nesse caso o código tem que ter um TRY e um CATCH para funcionar a mensagem de erro
    try {
        const resultado = await funcaoMuitoPesadaPromise;
    console.log(resultado);
    } catch(e) {
        console.log(e) //o E é de erro
    }

    console.log("fim")
}

execucaoPrincipal()
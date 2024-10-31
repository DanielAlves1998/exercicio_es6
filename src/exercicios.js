const alunos = ['Daniel', 'Ana', 'Ingrid', 'Diana'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        nota: '10'
    }
})

console.log(alunos2)

alunos2.push({
    nome: 'Estela',
    nota: '5'
})

const todosOsAlunosTemAnotaMaiorQue6 = alunos2.every(function(item) {
    return item.nota >= 6
})

console.log(todosOsAlunosTemAnotaMaiorQue6);

const alunosComNotaMaiorOuIgualA6 = alunos2.filter(function(item) {
    return item.nota >= 6;
})

console.log(alunosComNotaMaiorOuIgualA6);
/*
Funções dentro de objetos são chamadas de MÉTODO
const professor = {}, sinal de igual é chamado de atribuição de valor

para chamar um valor = console.log(objeto.variavel) ou objeto[variavel]
*/

const professor = {
    nome: 'Leo',
    idade: 78,
    tarefas: ['dar aulas', 'corrigir provas'],
    contaPiada: function () {
        console.log('É pa vê ou pa comê')
    }
}
console.log(professor['nome'], professor.idade, professor.tarefas);
professor.contaPiada()
professor.nome = 'Amanda'
professor['email'] = 'oioi@gmail.com'
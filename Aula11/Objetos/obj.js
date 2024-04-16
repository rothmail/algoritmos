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
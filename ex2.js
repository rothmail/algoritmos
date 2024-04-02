function personagens() {
    const pers = ['naruto', 'Goku', 'Ash'];
    const personagemAleatorio = Math.floor(Math.random() * pers.length);
    const personagemEscolhido= pers[personagemAleatorio];
    return personagemEscolhido;
}

console.log(personagens());
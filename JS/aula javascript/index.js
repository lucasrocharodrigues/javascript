function imprimeTexto(texto, classe) {
  var elemento = document.querySelector(classe);

  elemento.textContent = texto;
}

function temHabilidade(lista) {
  var posicaoHabilidade = lista.indexOf("Javascript");

  if (posicaoHabilidade != -1) {
    return true;
  } else {
    return false;
  }
}

var habilidades = ["Javascript", "ReactJS", "React Native"];

function imprime(lista){
    var ul = document.querySelector('.lista');

    for(item of lista){
        var li = elemento(item);

        ul.appendChild(li);
    }
}

imprime(habilidades);

function elemento(texto){
    var element = document.createElement('li');
    element.textContent = texto;

    return element;
}

console.log(elemento('Marcos'));











var candidatos = [
  {
    nome: "Marcos",
    habilidades: ["css", "PHP", "Ruby"],
    email: 'henriquemarcosmaia@gmail.com'
  },
  {
    nome: 'Sabrina',
    habilidades: ["Javascript", "ReactJS", "React Native"],
    email: 'sabrina@gmail.com'
  },
  {
    nome: 'Lucas',
    habilidades: ["Javascript", "ReactJS", "React Native", "Node js"],
    email: 'Lucas@gmail.com'
  }
];

function selecionaCandidatos() {
    var candidatosSelecionados = [];
    for(pessoa of candidatos){
        if (temHabilidade(pessoa.habilidades)) {
            candidatosSelecionados.push(pessoa);
        } 
    }

    return candidatosSelecionados;
}

var selecionados = selecionaCandidatos();

function enviaEmail() {
    for(pessoa of selecionados){
        console.log('Olá, ' + pessoa.nome + '. Parabéns, você foi selecionado!' );
    }
}


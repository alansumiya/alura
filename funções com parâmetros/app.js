//variável que dispara a excecução da função
let numeroSecreto = gerarNumeroAleatorio();


//função com parâmetros
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um númeor entre 1 e 10');

//função sem parâmetros
function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}


//função que obrigatoriamente retorna algum valor
function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 10 + 1);
}

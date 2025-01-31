//2)

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!';

//3)

function cliqueConsole(){
    console.log('O botão foi clicado!');
}

//4)

function cliqueAlerta(){
    alert('Eu amo JS!!');
}

//5)

function cliqueCidade(){
    let cidade = prompt('Digite um nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

//6)

function cliqueSoma(){
    let num1 = prompt('Digite o primeiro número:');
    let num2 = prompt('Digite o segundo número:');

    let soma = parseInt(num1) + parseInt(num2);
    alert(`A soma dos 2 números é de: ${soma}`);
}


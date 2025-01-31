alert('Boas vindas ao nosso site!');
let nome = 'Lua';
var idade = 25;
var numeroDeVendas = 50;
var saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos!';

nome = prompt('Qual o nome do usuário?');
idade = prompt('Qual a sua idade?');


if(nome == '' || idade == ''){
    alert(mensagemDeErro);
}else if(idade >= 18){
    alert('Pode tirar a habilitação!');
}else {
    alert('Não pode tirar a habilitação!');
}
//1)
/*
function exibirTextoNaTela(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('titulo', 'Cálculo do índice de massa corporal(IMC)');
exibirTextoNaTela('p1','Digite sua altura em metros:');
exibirTextoNaTela('p2','Digite seu peso em quilos:');




function calcular(){
    let altura = document.getElementById('campo1').value;
    let peso = document.getElementById('campo2').value;

    let imc = peso / altura ** 2;
 


    document.getElementById('reiniciar').removeAttribute('disabled');

    return exibirTextoNaTela('titulo', 'O seu IMC é de: ' + imc.toFixed(2));
}

function limparCampo(){
    altura = document.getElementById('campo1');
    altura.value = '';
    peso = document.getElementById('campo2');
    peso.value = '';
 }



function reiniciar(){
    limparCampo();
    exibirTextoNaTela('titulo', 'Cálculo do índice de massa corporal(IMC)');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


//2)  

function exibirTextoNaTela(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('titulo', 'Cálculo do fatorial de um número');
exibirTextoNaTela('p1','Digite o número para saber seu fatorial:');

document.getElementById('campo2').setAttribute('hidden',true);
document.getElementById('p2').setAttribute('hidden',true);


function calcular(){
    let num = document.getElementById('campo1').value;
    document.getElementById('reiniciar').removeAttribute('disabled');

    if(num == 0 || num == 1){
        return exibirTextoNaTela('titulo', `O fatorial de ${num} é 1`);
    } else if(num > 0){
        let fatorial = 1;
        for(let i = 1; i <= num; i++){
             fatorial *= i;
        }
        return exibirTextoNaTela('titulo', `O fatorial de ${num} é ${fatorial}`);
    }else{
        exibirTextoNaTela('titulo', `Não existe fatorial de número negativo!`);
    }
}

function limparCampo(){
    altura = document.getElementById('campo1');
    altura.value = '';
    peso = document.getElementById('campo2');
    peso.value = '';
 }



function reiniciar(){
    limparCampo();
    exibirTextoNaTela('titulo', 'Cálculo do fatorial de um número');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}




//3)

function exibirTextoNaTela(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('titulo', 'Cálculo de conversão de dólar');
exibirTextoNaTela('p1','Digite o valor em dólar para ser convertido em real:');

document.getElementById('campo2').setAttribute('hidden',true);
document.getElementById('p2').setAttribute('hidden',true);

function calcular(){
    let num = document.getElementById('campo1').value;
    document.getElementById('reiniciar').removeAttribute('disabled');

    let valor = 5.9 * parseFloat(num);
  
   return exibirTextoNaTela('titulo', `O valor em reais é de: ${valor}`);
}

function limparCampo(){
    altura = document.getElementById('campo1');
    altura.value = '';
    peso = document.getElementById('campo2');
    peso.value = '';
 }



function reiniciar(){
    limparCampo();
    exibirTextoNaTela('titulo', 'Cálculo do fatorial de um número');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}



//4) 

function exibirTextoNaTela(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('titulo', 'Cálculo do perímetro');
exibirTextoNaTela('p1','Digite o comprimento da sala em metros:');
exibirTextoNaTela('p2','Digite a largura da sala em metros:');


function calcular(){
    let comprimento = document.getElementById('campo1').value;
    let largura = document.getElementById('campo2').value;

    document.getElementById('reiniciar').removeAttribute('disabled');

    let perimetro = (comprimento * 2) + (largura * 2);
  
   return exibirTextoNaTela('titulo', `O perímetro da sala é de: ${perimetro}`);
}

function limparCampo(){
    altura = document.getElementById('campo1');
    altura.value = '';
    peso = document.getElementById('campo2');
    peso.value = '';
 }



function reiniciar(){
    limparCampo();
    exibirTextoNaTela('titulo', 'Cálculo do perímetro');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


//5)

function exibirTextoNaTela(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('titulo', 'Cálculo do perímetro circular');
exibirTextoNaTela('p1','Digite o raio da sala em metros:');
document.getElementById('campo2').setAttribute('hidden',true);
document.getElementById('p2').setAttribute('hidden',true);

function calcular(){
    let raio = document.getElementById('campo1').value;
    
    document.getElementById('reiniciar').removeAttribute('disabled');

    let perimetro = (2 * 3.14 * raio);
  
   return exibirTextoNaTela('titulo', `O perímetro circular é de: ${perimetro}`);
}

function limparCampo(){
    altura = document.getElementById('campo1');
    altura.value = '';
    peso = document.getElementById('campo2');
    peso.value = '';
 }



function reiniciar(){
    limparCampo();
    exibirTextoNaTela('titulo', 'Cálculo do perímetro circular');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

*/

//6)

function exibirTextoNaTela(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('titulo', 'Cálculo da tabuada');
exibirTextoNaTela('p1','Digite o valor da tabuada desejada:');
document.getElementById('campo2').setAttribute('hidden',true);
document.getElementById('p2').setAttribute('hidden',true);

function calcular(){
    let num = document.getElementById('campo1').value;
    
    document.getElementById('reiniciar').removeAttribute('disabled');

    for(let i = 0; i <= 10; i++){
        console.log(`${num} x ${i} = ` + num * i);
    }
  
}

function limparCampo(){
    altura = document.getElementById('campo1');
    altura.value = '';
    peso = document.getElementById('campo2');
    peso.value = '';
 }



function reiniciar(){
    limparCampo();
    exibirTextoNaTela('titulo', 'Cálculo da tabuada');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


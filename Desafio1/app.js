let diaDaSemana = prompt("Qual o dia da semana? ");

if ( diaDaSemana == "Sábado" || diaDaSemana == "Domingo"){
    alert("Bom fim de semana!")
} else {
    alert("Boa semana!")
}

let numero = prompt("Digite um numero");

if (numero >= 0) {
    alert(`O numero ${numero} é positivo`)
} else {
    alert(`O numero ${numero} é negativo`)
}

let pontos = prompt("Insira quantos tickets vc possui: ")

if (pontos >= 100){
    alert("Parabens, você venceu!")
} else {
    alert("Tente novamente para ganhar")
}

let saldo = 1000;

alert(`Seu saldo é de R$ ${saldo}`);

let nome = prompt("Digite seu nome: ");
alert(`Seja bem-vindo ${nome}`);
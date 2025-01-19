// 1° Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let cont = 1;

while (cont < 11) {
    console.log(`Passou ${cont}`);
    cont++
}

// 2° Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let sub = 10;
while (sub > -1){
    console.log(`Contagem regressiva ${sub}`)
    sub--
}

// 3° Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let num = prompt("Escolha um numero para contagem regressiva até 0: ");
while (num > -1){
    console.log(`Contagem regressiva ${num}`);
    num--;
}

// 4° Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let alvo = prompt("Digite um numero alvo: ");
let mai = 0;
while (mai <= alvo){
    console.log(mai);
    mai++
}
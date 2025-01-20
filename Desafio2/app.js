 let titulo = document.querySelector('h1')
 titulo.innerHTML = 'Hora do desafio'

 function alerta(){
    console.log('O botão foi clicado')    
 }

 function msgalert(){
    alert('Eu amo JS')
 }

 function cidade(){
    let nome = prompt("Entre com o nome de uma cidade do Brasil ")
    alert(`Estive em ${nome} e lembrei de você`)
 }

 function soma(){
    let n1 = parseInt(prompt('primeiro numero: '));
    let n2 = parseInt(prompt('Segundo numero: '));
    let resultado = n1 + n2;
    alert(`${resultado}`);
 }
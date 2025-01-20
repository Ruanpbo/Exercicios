
oi();

function oi(){
    return console.log("Olá, mundo!");
}

Name();
function Name(){
    let n = prompt("Digite seu nome: ");
    return alert(`Olá, ${n}!`)
}


function dobro(numero){
    return numero*2
}

let resultado = dobro(5);
console.log(resultado)

function media(a,b,c){
    return a+b+c/3;
}

let mediaa = media(5,6,8);
console.log(mediaa)

function maior(e,c){
    return e > c ? e : c;
}

let qmaior = maior(10, 20);
console.log(qmaior);

function msmNumero(m){
    return m*m;
}

let oMsmNumero = msmNumero(10);
console.log(oMsmNumero);
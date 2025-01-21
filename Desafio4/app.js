function txt(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function imc(peso, altura){
    return calculoImc = peso/Math.pow(altura,2);
}

resultado = imc(70,1.75)

txt('h2',resultado.toFixed(2));


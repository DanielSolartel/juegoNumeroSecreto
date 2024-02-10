let numeroSecreto;
let intentos;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

condicionesIniciales();
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste el número secreto en ${intentos} ${(intentos===1) ? 'intento':'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p', "¡El número secreto es menor!");
        }else{
            asignarTextoElemento('p', "¡El número secreto es mayor!");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p' , `Escoje un número del 1 al ${numeroMaximo}: `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSecretos);
    if (listaNumerosSecretos.length == numeroMaximo) {
        asignarTextoElemento('p', 'Se han sorteado todos los números posibles!');
        document.getElementById('mandar').setAttribute('disabled', true);
    } else {
        if (listaNumerosSecretos.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSecretos.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

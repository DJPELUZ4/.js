//declaramos el valor del numero ramdon
let numeroAzar = Math.floor(Math.random()*100)+1
//tomamos el valor que ingresara el usuario en el input
let numeroEntrada = document.getElementById('numeroEntrada')
//tomamos el id mensaje para luego modificarlo
let mensaje = document.getElementById('mensaje')
//tomamos el id contador para luego modificarlo
let contador = document.getElementById('contador')
//creo una variable para usarla como contador
let intentos = 0

function verificarResultado() {
    intentos ++
    contador.textContent= intentos;

    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Ingrese un numero entre 1 y 100';
        mensaje.style.color = 'red';
        return
    }
    if(numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Felicidades es el numero correcto';
        mensaje.style.color = 'green';
    } else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Mas arriba';
        mensaje.style.color = 'red';
    } else {
        mensaje.textContent = 'Mas abajo';
        mensaje.style.color = 'red';
    }
}
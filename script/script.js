const listaNombres = document.getElementById('nombres');
const btn_comenzar = document.getElementById('btn-start');
const btn_restart = document.getElementById('btn-restart')
const resultado = document.getElementById('resultado');
const modal = document.getElementsByClassName('modal')[0];
const spinner = document.getElementsByClassName('spinner')[0];


const obtenerNombres = () =>{
   const textareaValue = listaNombres.value;

   modal.style.display = 'block';
   setTimeout(() =>{
    const nombres = textareaValue.split('\n');
    const nombresRandom = Math.floor(Math.random()* nombres.length);
    const nombreElegido = nombres[nombresRandom];
    resultado.innerHTML = '';
    const resultadoTexto = nombreElegido;
    const resultadoElemento = document.createElement('p');
    resultadoElemento.textContent = nombreElegido;
    resultado.appendChild(resultadoElemento);
    modal.style.display = 'none'
   }, 3000);
}

/* Evento del boton 'Comenzar'*/
btn_comenzar.addEventListener('click', obtenerNombres)
/* Evento del boton 'Restart' */

const borrarNombres = () =>{
    listaNombres.value = ''
    resultado.style.display = 'none'
}
btn_restart.addEventListener('click',borrarNombres)

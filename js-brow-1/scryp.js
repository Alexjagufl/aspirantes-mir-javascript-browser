const input = document.querySelector('#texto');
const resultado = document.getElementById('resultado')
const resultadoMayusculas = document.getElementById('resultadoMayusculas')

input.addEventListener('input', function() {
    const texto = input.value.toUpperCase();
    resultado.textContent = texto;
  });

const boton = document.querySelector('.btn')
boton.addEventListener('click', function() {
    const texto =  input.value.toUpperCase();
    resultadoMayusculas.textContent = texto;
  });



const h1 = document.querySelector('h1');// con queryselector nos obliga a colocarle si es elemento normal o si es tipo clase o tipo id
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues );


//Add event listener con event como argumento de la funcion
function sumarInputValues(event) {

    event.preventDefault();//este se usa para que el evento de form no escuche el envio o recargo de la pagina y no lo muestre aca mismo en el html.
    const sumaInputs = innerText = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "El resultado es: " + sumaInputs;
}


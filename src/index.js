import validator from './validator.js';



let limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", clean);

function clean(){
    document.getElementById('reg').reset();
}

let btnRegistrar = document.getElementById('registrar');
btnRegistrar.addEventListener ('click', regis);


function regis() {
    let cad = document.getElementById('tar').value;
    console.log(cad);
    console.log(validator.isValid(cad));
}


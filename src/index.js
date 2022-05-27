import validator from './validator.js';



let limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", clean);

function clean(){
    document.getElementById('reg').reset();
    document.getElementById('respuesta').innerHTML= '';
}

let btnRegistrar = document.getElementById('registrar');
btnRegistrar.addEventListener ('click', regis);


function regis() {
    let cad = document.getElementById('tar').value;

    let inputNombre = document.getElementById('tar');
    inputNombre.value = validator.maskify(cad);

    //let labelRespuesta = document.getElementById('respuesta');

    if(validator.isValid(cad)==true){
        document.getElementById('respuesta').innerHTML= 'Su tarjeta es válida';
    } else {
        document.getElementById('respuesta').innerHTML= '¡Su tarjeta es inválida! Por favor registre un número de tarjeta válido';
    }

}



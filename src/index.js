import validator from './validator.js';



let limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", clean);

function clean(){
    document.getElementById('reg').reset();
    document.getElementById('respuesta').innerHTML= '';
    document.getElementById('errort').innerHTML = '';
    document.getElementById('errori').innerHTML = '';
    document.getElementById('errorb').innerHTML = '';
}

let btnRegistrar = document.getElementById('registrar');
btnRegistrar.addEventListener ('click', regis);



function validForm() {
    let cad = document.getElementById('tar').value;
    let identify = document.getElementById('ident').value;
    let bove = document.getElementById('bov').value;

    if(cad === null || cad ===''){
        document.getElementById('errort').innerHTML = 'Debe ingresar un número de tarjeta';
    }

    if(identify === null || identify ===''){
        document.getElementById('errori').innerHTML = 'Debe ingresar un número de identificación';
    }

    if(bove === null || bove===''){
        document.getElementById('errorb').innerHTML = 'Debe ingresar un número de bóveda';
    }

    return false;
}

function regis() {

    let cad = document.getElementById('tar').value;
    let inputCad = document.getElementById('tar');
    inputCad.value = validator.maskify(cad);

    if(isNaN(cad)==false){
        if(cad.length==16){
            if(validator.isValid(cad)==true){
                document.getElementById('respuesta').innerHTML= 'Su tarjeta es válida';
            } else {
                document.getElementById('respuesta').innerHTML= '¡Su tarjeta es inválida! Por favor registre un número de tarjeta válido';
            }
        }else{
            alert('¡Error! Su tarjeta debe tener 16 digitos para poder validarla');
        }
    }else{
        alert('¡Error! Solo debe ingresar números para la validación');
    }

    return validForm();
    
    }




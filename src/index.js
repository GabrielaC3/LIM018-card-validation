import validator from './validator.js';

let mostrarReg = document.getElementById("mostrarReg");
mostrarReg.addEventListener ("click", mostrarRegistro);

function mostrarRegistro(){
    document.getElementById("pagina1").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
  }

let limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click", clean);

function clean(){
    document.getElementById('reg').reset();
    document.getElementById('respuesta').innerHTML= '';
    document.getElementById('errort').innerHTML = '';
    document.getElementById('errori').innerHTML = '';
    document.getElementById('errorb').innerHTML = '';
    document.getElementById('respConf').innerHTML = '';
    document.getElementById('tarnum').innerHTML = '';
    document.getElementById('tarnom').innerHTML = '';
    document.getElementById('tarbov').innerHTML = '';
    document.getElementById('tar').innerHTML = '';
}

let marcadorVacios = false;

function validForm() {
    let cad = document.getElementById('tar').value;
    let identify = document.getElementById('ident').value;
    let bove = document.getElementById('bov').value;

    if(identify === null || identify ===''){
        document.getElementById('errori').innerHTML = 'Debe ingresar su nombre';
    }else{
        marcadorVacios = true;
    }

    if(bove === null || bove===''){
        document.getElementById('errorb').innerHTML = 'Debe ingresar un número de bóveda';
    }else{
        marcadorVacios = true;
    }

    return false;
}

let confirmarR = document.getElementById('confirmar');
confirmarR.addEventListener ('click', confirmar);

let marcador = false;

function confirmar() {

    let cad = document.getElementById('tar').value;
    let inputCad = document.getElementById('tar');
    inputCad.value = validator.maskify(cad);

    if(cad === null || cad ===''){
        document.getElementById('errort').innerHTML = 'Debe ingresar un número de tarjeta';
    } else{
        
    if(isNaN(cad)==false){
        if(cad.length==16){
            if(validator.isValid(cad)==true){
                document.getElementById('respuesta').innerHTML= 'Su tarjeta es válida';
                document.getElementById("tarnum").innerHTML = validator.maskify(cad);
                marcador = true;

            } else {
                document.getElementById('respuesta').innerHTML= '¡Su tarjeta es inválida! Por favor registre un número de tarjeta válido';
            }
        }else{
            alert('¡Error! Su tarjeta debe tener 16 digitos para poder validarla');
            document.getElementById('respuesta').innerHTML= 'Registre un número de tarjeta válido';
        }
    }else{
        alert('¡Error! Solo debe ingresar números para la validación');
        document.getElementById('respuesta').innerHTML= 'Registre un número de tarjeta válido';
    }
    }
    validForm();

    let escNom = document.getElementById("ident").value;
    document.getElementById("tarnom").innerHTML = escNom;
    let escBov = document.getElementById("bov").value;
    document.getElementById("tarbov").innerHTML = "Bóveda: "+ escBov;

    
    }

    let registrar = document.getElementById("registrar");
    registrar.addEventListener("click", regis);

    function regis(){
        if(marcador==true && marcadorVacios == true){
            document.getElementById("pagina2").style.display = "none";
            document.getElementById("pagina3").style.display = "block";

        } else {
            document.getElementById('respConf').innerHTML= '¡Debe confirmar los datos!';
        }

      }

let volverP = document.getElementById("volver");
volverP.addEventListener ("click", volver);

function volver(){
    document.getElementById("pagina1").style.display = "block";
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("pagina3").style.display = "none";
    marcador=false;
    marcadorVacios = false;
    clean();

}
//let limpiar = document.getElementById("limpiar");

//limpiar.addEventListener("click", clean);

function clean(){
    document.getElementById('reg').reset();
}

function probando(){
    let cad = document.getElementById('tar').value;
    let arreglo = cad.split('');
    let nuevo = [];
    nuevo = arreglo;
    for (let pos=0 ; pos<arreglo.length ; pos=pos+2){
      nuevo[pos]=(parseInt(arreglo[pos])*2).toString();
     }    
    
    let paso2 = [];
    paso2 = nuevo;
    let nuevo2 = paso2
    
    for(let i=0 ; i<paso2.length ; i= i+1){
      if(paso2[i]>9){
        let temp = paso2[i];
        let sum = parseInt(temp[0]) + parseInt(temp[1]);
        nuevo2[i]=sum.toString();
      }else {
        nuevo2[i]=paso2[i];
      }
    }

    let paso3 = [];
    paso3 = nuevo2;
    let suma2 = 0;

    for(let j=0 ; j<paso3.length ; j=j+1){
      suma2 = suma2 + parseInt(paso3[j]);
    }
    console.log(suma2);

    if(suma2%10==0){
      console.log("Es válido")
    }
    else{
      console.log("Es inválido")
    }


  }

function primerPaso(){
    let cad = document.getElementById('tar').value;
    console.log(cad);
    let arreglo = cad.split('');
    console.log(arreglo);
    console.log(arreglo.length);

    let nuevo = [];
    nuevo = arreglo;
    for (let pos=0 ; pos<arreglo.length ; pos=pos+2){
      nuevo[pos]=parseInt(arreglo[pos])*2;
    }
    console.log(nuevo);
  }

  function SegundoPaso() {
    let cad = document.getElementById('tar').value;
    console.log(cad);
    let arreglo = cad.split('');
    console.log(arreglo);
    console.log(arreglo.length);

    let nuevo = [];
    nuevo = arreglo;
    for (let pos=0 ; pos<arreglo.length ; pos=pos+2){
      nuevo[pos]=(parseInt(arreglo[pos])*2).toString();
     }
    console.log(nuevo);
    
    let paso2 = [];
    paso2 = nuevo;
    let nuevo2 = paso2
    console.log(paso2);

    for(let i=0 ; i<paso2.length ; i= i+1){
      if(paso2[i]>9){
        let temp = paso2[i];
        let sum = parseInt(temp[0]) + parseInt(temp[1]);
        nuevo2[i]=sum.toString();
      }else {
        nuevo2[i]=paso2[i];
      }
      console.log(nuevo2);
    }

    }

    function TercerPaso(){
      let cad = document.getElementById('tar').value;
      console.log(cad);
      let arreglo = cad.split('');
      console.log(arreglo);
      console.log(arreglo.length);
  
      let nuevo = [];
      nuevo = arreglo;
      for (let pos=0 ; pos<arreglo.length ; pos=pos+2){
        nuevo[pos]=(parseInt(arreglo[pos])*2).toString();
       }
      console.log(nuevo);
      
      let paso2 = [];
      paso2 = nuevo;
      let nuevo2 = paso2
      console.log(paso2);
  
      for(let i=0 ; i<paso2.length ; i= i+1){
        if(paso2[i]>9){
          let temp = paso2[i];
          let sum = parseInt(temp[0]) + parseInt(temp[1]);
          nuevo2[i]=sum.toString();
        }else {
          nuevo2[i]=paso2[i];
        }
        console.log(nuevo2);
      }
  
      let paso3 = [];
      paso3 = nuevo2;
      let suma2 = 0;
  
      for(let j=0 ; j<paso3.length ; j=j+1){
        suma2 = suma2 + parseInt(paso3[j]);
      }
      console.log(suma2);
  
  
    }
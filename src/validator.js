const validator = {
  // ...
};

export default validator;

function primerPaso(){
  let arreglo = document.getElementById('tar').value
  for (let pos=0 ; pos<16 ; pos=pos+2){
    let nuevo = 0
    nuevo [pos]= arreglo[pos]*2
  }
  console.log(nuevo)
}
function SegundoPaso(numTarDup) {
  for (let pos=0 ; pos<16 ; pos=pos+2){
    if (numTardup[pos]>9){
      numTarDup[pos] = 1+2
    }

  }
  }


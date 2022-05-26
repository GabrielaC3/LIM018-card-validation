const validator = {
  
};

validator.isValid = function(creditCardNumber){
        
    let nuevo = [];
    
    for (let inv=creditCardNumber.length-1 ; inv>=0 ; inv=inv-1){
      nuevo = nuevo + creditCardNumber[inv];
     }
    
    let arreglo = nuevo.split('');
    let nuevo1 = [];
    nuevo1 = arreglo;
    for (let pos=1 ; pos<arreglo.length ; pos=pos+2){
      nuevo1[pos]=(parseInt(arreglo[pos])*2).toString();
     }    
    
    let paso2 = [];
    paso2 = nuevo1;
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
    
    if(suma2%10==0){
      return true;
    }
    else{
      return false;
    }
  }


validator.maskify = function(creditCardNumber){
    let arreg = creditCardNumber.split('');
    let newarray = [];
    newarray = arreg;
    let mask = "";

    for (let i=0 ; i<arreg.length-4 ; i=i+1){
      newarray[i]="#";
     }
    mask = newarray.toString().replace(/,/g,"");
    
    return mask;
}

export default validator;
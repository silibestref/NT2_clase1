
// Sumar todos los numero  positivos por un lado y los negativos por otro
const numeros = [10,29,15,6,-1,-5,-4];
const CERO = 0;
let sumaPositivos=0;
let restaNegativos=0;

for(var i = 0; i<numeros.length; i++){
    if(numeros[i] > CERO){
        sumaPositivos += numeros[i];
    }
    else if(numeros[i] < CERO){
        restaNegativos += numeros[i]
    }
}
console.log("TOTAL SUMA POSITIVOS:" + sumaPositivos);
console.log("TOTAL SUMA NEGATIVOS:" + restaNegativos);


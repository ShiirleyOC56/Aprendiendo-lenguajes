function pow (x,n){ // X -> no deberia haber espacio entre el nmbre de la funcion y el parentesis
    //pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result*=x; // X -> falta el espacion entre las variables y el operador result *= x
    }

    return result;
}

let x = prompt("x?", '')
let n = prompt("n?",''); // X -> falta el espacio entre los argumentos prompt("n?", "")

if (n <= 0){
    alert(`Power ${n} is not supported,
    please enter an integer nubrer greater than zero`);
}else{ //X -> espacio entre las llaves } else {
    alert(pow(x,n));// x-> falta espacios alrededor de llamada anidada alert( pow(x, n) );
}
//¿Como crear un funcion?

function showMessage(){
    alert('Hola a todos! :D');
}
//¿Como llamar a una funcion?

showMessage();

//¿Que son las variables locales en una funcion?

function showMessageV(){
    let message = "Hola, soy AlceXich"; //Esto es una variable local
    alert(message);
}

showMessageV();

//alert(message); Daria error ya que la vriable esta fuera de la funcion

//¿Que es una variable externa?

let name = "AlceXich";
function showName(){
    name = "Bob"; //Caambio laa variable externa

    let message = "hola," + name;
    alert(message);

}

alert(name); //AlceXich
showMessageV();
alert(name); //Bob

//¿Como se usan los parametros dentro de una funcion?

function showParametros(from, text){
    from = "*" + from + "*";
    alert(from + ":" + text);
}

let from = "Alcea";

showParametros(from,"Hola");

alert(from);//el valor de "from" es el mismo, la función modificó una copia local

// parametros por defecto

showParametros(from, text= "por defecto");

//Devolver un valor

function sum(a, b) {
    return a + b;
}
  
let result = sum(1, 2);
alert( result ); // 3

//Nomenclatura de funciones
showMessage(..)     // muestra un mensaje
getAge(..)          // devuelve la edad (la obtiene de alguna manera)
calcSum(..)         // calcula una suma y devuelve el resultado
createForm(..)      // crea un formulario (y usualmente lo devuelve)
checkPermission(..) // revisa permisos, y devuelve true/false
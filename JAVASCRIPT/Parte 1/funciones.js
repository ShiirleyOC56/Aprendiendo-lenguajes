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

/* TAREAS */

// Reescribe la función utilizando '?' o '||'
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('¿Tienes permiso de tus padres?');
    }
}

let resul = age > 18 ? true : confirm("¿Tienes permiso de tus padres?");

function checkAge1(age) {
    return (age > 18) || confirm('¿Tus padres te lo permitieron?');
  }
//Funcion min(a,b)

function min(a,b){
    return a < b ? a:b;
}

//Funcion pow(x,n)

function pow(x,n){
  let resultado=x;
  
  for(let i = 0;i<n;i++){
    resultado *=x;
  }
  return resultado;
}

let x = prompt("x",'');
let n = prompt("n",'');

if(n<1){
    alert("Potentcia ${n} no debe ser menor a 1");
}else{
    alert(pow(x,n));
}
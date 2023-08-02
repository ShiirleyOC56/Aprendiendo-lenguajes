/* Reescribe el "switch" en un "if"*/
switch (navegador) {
    case 'Edge':
      alert( "¡Tienes Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Esta bien, soportamos estos navegadores también' );
      break;
  
    default:
      alert( '¡Esperamos que esta página se vea bien!' );
}
/*SOLUCION*/
let navegado = prompt("Escriba su navegador","");
if (navegado == "Edge" ){
    alert( "¡Tienes Edge!" );
}else if(navegado == "chrome" || navegado == "firefox" || navegado == "safari" || navegado == "opera"){
    alert( 'Esta bien, soportamos estos navegadores también' );
}else{
    alert( '¡Esperamos que esta página se vea bien!' );
}

/*Reescribe "if" en "switch"*/
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

let b = +prompt('a?', '');

switch(b){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert("V")
        break;
}
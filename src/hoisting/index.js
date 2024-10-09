/*
El hoisting o elevación

*/

console.log(nameOfDog); //output: undefined, esto porque la variable var se eleva, por lo que lo primero que hace es declararla con un valor undefined
var nameOfDog = "firulais";
console.log(nameOfDog); //output: Firulais, esto porque la variable ya tiene un valor


//EL hoisting se veria algo asi
/*
var nameCat = undefined;
function nameCat() {
    console.log(`El mejor gato es ${nameCat}`)
}
*/

nameOfCat(); // tambien las funciones son elevadas, pero solo las que inician con functions, no pasa lo mismo con arrow function () => {}
// o funciones anonimas const funcion = function () {}


function nameOfCat() {
    console.log(`El mejor gato es ${nameCat}`)
}

var nameCat = 'Mia';


/*
COmentario estudiante Platzi:

Mis aportes:

El hosting solo aplica a variables declaradas con var, si intentamos hacer un ejemplo similar con let o const tendremos errores:

console.log(x); //❌ ReferenceError: Cannot access 'x' before initialization
let x = 5; 
El hosting para funciones solo aplica para funciones declaradas usando la palabra reservada function, si intentamos aplicarlo a arrow functions tendremos errores también:

console.log(saludo()) //✅ "Hola"
function saludo(){
  return "Hola"
}

console.log(despedida()) //❌ ReferenceError: Cannot access 'despedida' before initialization
const despedida = () => {
  return "Bye"
}

*/
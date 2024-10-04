//Esto fue incorporado en EcmaScript 6
// el modo estricto permite dar unas reglas para tener control de asignación de variables
// para cumplir la mayor de los estandares, ya que no aplican bien unos conceptos

//asigna vaor pero se salta la declaración, en este caso interpreta que se declara var pi = undefined
pi = 3.1416; // aquí se "reasignaria"
console.log(pi);

//se declara en la cabeza del documento
'use strict';  //con esto no se hara uso del hoisting, con una vez ser declarado es suficiente
euler = 2.7182818;
console.log(euler); // error, primero debe declararse y si se quiere reasignarla

function myFunction() {
    return pi = 3.1416;
}
console.log(myFunction());


/*Comentario compañero platzi
El modo estricto tiene varios cambios en la semántica normal de JavaScript:

Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.

Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.

Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.
 */
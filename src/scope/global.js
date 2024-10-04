// variables

var a; //declarando
var b = 'b';  //declaramos / asignamos
b = 'bb';  //reasignando el valor
var a = 'aa';  //redeclaración de a


//Global Scope
//Cualquier variable var, pasa a ser variables globales, instanciadas en el objeto principal (windows)
var fruit = 'Apple';  //global, todas las variables que esten desde 
// la parte superior o no esten dentro de un bloque, son variables globales
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia';  //aqui asignamos un valor, que no declaramos como variable, pero lo toma como global
    // si fuera con let o const no pasaria
    console.log(country);
}

countries();
console.log(country);
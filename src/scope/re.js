// Reasignación y redeclaración
//con Var
var firstname; //se declara con un valor undefined
firstname = 'Cristiam'; //aquí se le asigna un valor
console.log(firstname);

var lastname = "David"; //asignado y declarando
lastname = 'Ana'; //reasignando el valor
console.log(lastname); //output: Ana, esto porque se reasigno el valor de David por Ana

var secondName = 'David'; //declarando / asignando
var secondName = 'Ana'; //Aquí se reasignando
console.log(secondName); //output: Ana

//con Let
let fruit = 'Apple'; //declara y asigna
fruit = 'Kiwi'; //reasigna
console.log(fruit); //output: 'Kiwi
//let fruit = 'Banana';  //let no me permite redeclarar


//con Const
const animal = 'dog'; // declara y asigna
//animal = 'cat'; //const no permite reasignar
//const animal = 'hamster';  //no puede ser redeclarada
console.log(animal);

const vehicles = [];
vehicles.push('🚜');
console.log(vehicles); //aquí no se reasigna, ni redeclara, si no que se hace referencia al arreglo
// y sobre el arreglo se ejecutan los metodos 

vehicles.pop();
console.log(vehicles);


/* Comentario de platzi
En el caso de los Arrays en JavaScript se le puede hacer push, declarandolo con const 
no solo por que se pueda y ya. En realidad Javascript meneja los Arrays Dinamicos, en 
otros lenguajes los arrays se pueden hacer estaticos y allí no se puede agregar. Esto 
tiene que ver con la capacidad de memoria asignada a los arrays, en el caso de los dinamicos 
la asignacion de memoria se dobla y en el caso de los estaticos, es solo la memoria que se le 
asigna desde el inicio. Esto lo aprendí en el curso de estructura de datos con Javascript que 
imparte Diego de granda.
 */
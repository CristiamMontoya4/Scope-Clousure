// En EC6, se introdujo las palabras reservadas let y const, con ellas nace este concepto de
// Block Scope
//las variables definidas dentro de un bloque solo pueden ser accedidas desde el bloque
//los bloque son casi todo lo que esta dentro de llaves como if, for, etc


function fruits() {
    if (true) {  //elemnto de lógica más handlebars, iniciando una secuencia consecunete de esto
        var fruit1 = 'apple';  //function scope
        let fruit2 = 'Kiwi';  //block scope
        const fruit3 = 'grapes';  //block scope
        console.log(fruit2);  //desde aquí si se puede acceder
        console.log(fruit3);  //desde aquí si se puede acceder
        
        
    }
    console.log(fruit1); //como el scope de var es global, se puede acceder 
    //console.log(fruit2); //Muestra error, ya que variables con let solo tiene alcance block
   // console.log(fruit3); //Muestra error, ya que variables con const solo tiene alcance block
    
}

fruits();

/* Comentario interesante
Al intentar llamar fuera del alcance de bloque a las variables declaradas con let o const, tenemos un error,
 mientras que la variable declarada con var es accedida sin problemas. Esto puede ocasionar un error lógico
 ya que no estamos protegiendo a la variable fruit1 (declarada con var), para que solo sea accedida dentro 
 de su bloque, esta puede ser accedida y alterada por otra función y nos puede llevar tiempo encontrar cuál 
 es el problema. 😥 . Los programadores usualmente no somos muy creativos para nombrar variables, por lo que 
 es común que podamos nombrar en otra función una variable llamada fruit1 (pensando que esta solo va a existir 
 en el ámbito local de la función) y allí cometer el error lógico. 🥵 . No es recomendable usar var 🙅🏻‍♂️ a medida 
 que vayas practicando notarás que con let y const tienes más control sobre las variables que declares. 👌🏻
*/
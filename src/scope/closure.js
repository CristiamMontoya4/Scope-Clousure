//Un closure, permiten acceder al ámbito de una función exterior desde una función anterior
//En javascript, las clausuras se crean cada vez que uan función es creada
// A diferencia de otros conceptos, este no siempre es utilizado

//Un ejemplo de closure es cuando una función accede a una variable fuera de su contexto

//Ejemplo: funciones anidadas, que recuerdan al conjunto de variables que podian acceder,
//por más que se invoque desde otro lugar u otro

const myGlobal = 0;

//ámbito léxico, significa que la accesibilidad de las variables esta determinada, por la 
//posición de las mismas dentro de los ámbitos anidados
function myFunction() {
    const myNumber =1;
    console.log(myGlobal);

    function parent() { // function interna
        const inner = 2;
        console.log(myNumber, ' ', myGlobal);
        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();
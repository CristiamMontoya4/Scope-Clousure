//ejemplo: funcionanmiento carrito
function shoppingCart(){
    let cart = []
    return {
        addItems(item){
            cart.push(item);
        },
        getCartItem(){
            return cart
        },
        removeItem(){
            cart.pop()
        }
    };
}

const amazon = shoppingCart();
amazon.addItems("Mouse");
amazon.addItems("Keyboard");
amazon.addItems(`Display 24"`);
console.log(amazon.getCartItem()) // ['Mouse', 'Keyboard', 'Display 24"']
amazon.removeItem()
console.log(amazon.getCartItem()) // ['Mouse', 'Keyboard']

function addMoney(coin){
    let saveCoins = 0;
    saveCoins += coin;
    console.log(`MoneyBox: $${saveCoins}`);
}

const moneyPig = addMoney;
moneyPig(5);
moneyPig(10);

//ejemplo: temporizador
/*
function temporizador(intervalo) {
    setInterval(function() {
      console.log("Han pasado " + intervalo + " segundos.");
    }, intervalo * 1000);
  }
  
  temporizador(2);
  temporizador(5);
*/

//Ejemplo: filtro para arrays

function filtrar(array, filtro) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
      if (filtro(array[i])) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }
  
  var numeros = [1, 2, 3, 4, 5];
  var pares = filtrar(numeros, function(num) {
    return num % 2 === 0;
  });
  console.log(pares); // muestra [2, 4]

  /* Comentario estudiante platzi
Tuve que ver la clase como 4 veces pero creo que lo tengo: s closures son una característica importante de JavaScript, 
y entender cómo funcionan es esencial para escribir código limpio y eficiente. Un closure es una función que se define 
dentro de otra función, y que tiene acceso a las variables y parámetros de la función externa. Además, el closure mantiene 
una referencia a los valores de estas variables, incluso después de que la función externa ha terminado de ejecutarse.

Veamos un ejemplo para entender mejor cómo funcionan los closures. Imagina que queremos escribir una función que multiplique 
un número por un factor, pero queremos definir el factor en una función externa:
*/

function multiplicarPor(factor) {
  return function(numero) {
    return numero * factor;
  }
}

var duplicar = multiplicarPor(2);
var triplicar = multiplicarPor(3);

console.log(duplicar(5)); // Output: 10
console.log(triplicar(5)); // Output: 15

/*
En este ejemplo, la función multiplicarPor devuelve otra función que realiza la multiplicación. La función interna mantiene 
una referencia al valor de factor, que se define en la función externa. Cuando llamamos a multiplicarPor(2), se devuelve una 
función que multiplica el número por 2. Al llamar a multiplicarPor(3), se devuelve otra función que multiplica el número por 3. 
En ambos casos, se crea un closure que mantiene una referencia al valor de factor.

En resumen, los closures son útiles porque permiten crear funciones que mantienen una referencia a los valores de las variables 
y parámetros de la función externa, incluso después de que la función externa ha terminado de ejecutarse. Esto hace que las 
funciones sean más flexibles y reutilizables, y puede ayudar a evitar errores comunes en el código.

*/
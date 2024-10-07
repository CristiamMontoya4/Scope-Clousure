//Ejemplo de clousure

// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5); output: 5
// moneyBox(5); output: 5, falla porque se ejecuta la función desde cero

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox(); //cada vez que se ejecuta moneyBox, estamos un nuevo clousure, como un nuevo entorno
myMoneyBox(5);  //el parentesis nos sirve de la siguiente manera, al función retorna countCoins, le agrega lo del parentesis,
//que se veria asi countCoins(5), por ende da ese resultado
myMoneyBox(5); //output: $10
myMoneyBox(15); //output: $25 , este va guardando en el savecoin, no es como si se volviera a ejecutar de cero la función

const moneyBoxAna = moneyBox();
moneyBoxAna(10); //output: $10
moneyBoxAna(20); //output: $30
moneyBoxAna(5); //output: $35
myMoneyBox(20); //output: $45

// Otro ejemplo

function mosaico() {
    const figuras = []; //se puede usar constant, ya que el array es mutable
  
    function pintar(nuevaFigura) {
      figuras.push(nuevaFigura);
  
      let resultado = '';
      const mainLength = figuras.length * 2; //4
      
      for (let fila = 0; fila < mainLength; fila++) {
  
        for(let columna = 0; columna < mainLength; columna++) {
          const valorMax = fila > columna ? fila : columna;
          const valorMin = fila < columna ? fila : columna;
  
          const valorPosible = mainLength - (valorMax + 1);
  
          const indexFigura = valorPosible < valorMin ? valorPosible : valorMin;
          
  
          resultado += `${figuras[indexFigura]} `; 
        }
        resultado += '\n';
      }
      return resultado;
    }
  
    return pintar;
  
  }
  
  const m = mosaico(); //retorna pintar, podriamos decir que m = pintar
  console.log(m('*')); //m('*'), entoces esto sería pintar('*')
  console.log(m('o'));
  console.log(m('+'));
  console.log(m('x')); 
// Scope function o tambien llamadas scope local

function greeting() {
      //cada función tiene su propio alcance, las variables declaradas dentro
      //son accesibles desde la función y las funciones anidadas
    let useName = 'Cristiam';  //se usa let y const ya que estas declaraciones respeta los scope
    console.log(useName);  //output: Cristiam

    if(useName === 'Cristiam'){
        console.log(`Hello ${useName}!`); //output: Cristiam, esta puede acceder a la variable
    }
}

greeting();
// console.log(useName);  //sale error, ya que el alcance de la variable esta solodentro de la función
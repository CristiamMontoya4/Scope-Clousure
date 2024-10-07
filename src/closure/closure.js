function greeting() {
    let username = 'Cristiam';

    function displayUserName() {
        return `Hello ${username}`
    }

    return displayUserName();
}

const g = greeting();
console.log(g); //output: 'Cristiam', en este llamado se retorna la ejecución de la función displayUserName
console.log(g()); // output: error, viendo el contexto pierde sentido
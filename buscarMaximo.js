// Ejercicio 4: Arrays y bucles

// Escribe una función llamada buscarMaximo que tome un array de números como argumento y devuelva el número máximo en el array. Utiliza un bucle para recorrer el array y comparar cada número con el máximo actual.

// Por favor, házmelo saber cuando estés listo para ver la solución o si necesitas alguna pista.

function buscarMaximo(numeros) {
    let maximo = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i]
        }
    }
    return maximo;
}

let numeros = [1,2,3,4,5,6,7,8, 9]

console.log(buscarMaximo(numeros))
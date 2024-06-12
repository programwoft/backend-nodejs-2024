//Ejercicio03

/* Declara un array de números. Usar los métodos map, filter y reduce para hacer lo siguiente:
    Multiplicar cada número por 3.
    Filtra los números que son mayores que 10.
    Suma todos los números filtrados.*/

const numeros = [2,4,15,6];

let multiplicado = numeros.map(numero => numero * 3);
let filtrado = multiplicado.filter(numero => numero > 10);
let sumadoFinal = filtrado.reduce((total, numero) => total + numero, 0);

console.log(sumadoFinal);

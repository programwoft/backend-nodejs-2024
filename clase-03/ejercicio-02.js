// Crear una funcion con el npmbre de funcionArray() que tome dos arreglos de numeros
// enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar
// multiplicado por dos.

/* 
Ejmeplo;

[2,5,2][1,5,3] => [4, 10, 4, 2, 10, 6]

*/

function fusionArray(numeros1, numeros2){
    let numeros = numeros1.concat(numeros2);
    return numeros.map(numero => numero * 2);
}

console.log(fusionArray([2,5,2], [1,5,3]));

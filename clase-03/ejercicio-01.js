// Crear una funcion sumaArreglo() que tome como parámetro un arreglo de números,
// retornar la longitud del arrelog + la suma de todos los números del arreglo.

function sumaArreglo(numeros){
    return numeros.length + numeros.reduce((total, numero) => total + numero, 0);
}

console.log(sumaArreglo([2,3,8,10]))

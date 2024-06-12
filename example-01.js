let a = 5
let b = 10
let c = 15

console.log(a+b)

//OPERACIONES ARITMÉTICAS
let x = 8
let y = 3

console.log(x * y)
console.log(x / y)

//CONCATENAR CADENAS
let firstname = 'FLORENTINO'
let lastname = 'RADA'

console.log('HOLA, MI NOMBRE ES '+ firstname + ' ' + lastname)

//CONDICIONALES
let numero = 10

if (numero>0) {
    console.log('El número es positivo')
}else if(numero<0){
    console.log('El número es negativo')
}else{
    console.log('El número es cero')
}

//BUCLES

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//FUNCIONES
const nombre = 'FLORENTINO';
saludar(saludar(nombre))

function saludar(nombre){
    return 'HOLA, '+ nombre + '!';
}

function sumar(x, y){
    return x+y;
}
function mayor(x, y){
    let mayor = x;
    return mayor > y ? mayor : y;
}
function espar(numero){
    return numero % 2 === 0;
}
function factorial(numero){
    if (numero===0) {
        return 1;
    }
    return numero * factorial(numero-1)
}

console.log(sumar(4, 8));
console.log(mayor(8, 4));
console.log(espar(8));
console.log(factorial(8));

// ARRAY Y BUCLE
let numeros = [1,2,3,4,5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] * 2);
}

// OBJETOS
let persona = {
    nombre: 'DEMO',
    edad: '22',
    ciudad: 'LIMA'
}

console.log('ME LLAMO '+persona.nombre+' TENGO '+persona.edad+ ' AÑOS Y VIVO EN '+persona.ciudad)

// FUNCIONES DE ORDEN SUPERIOR

function operar(x, y, operacion) {
    return operacion(x, y);
}
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multiplicacion(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}

let num1 = 5
let num2 = 10;
console.log('Suma: ' + operar(num1, num2, suma));
console.log('Resta: ' + operar(num1, num2, resta));
console.log('Multiplicación: ' + operar(num1, num2, multiplicacion));
console.log('División: ' + operar(num1, num2, division));

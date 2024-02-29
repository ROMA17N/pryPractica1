// ------------------------------ ESTRUCTURA IF -------------------------------

/*
let num = 2;
if (num == 2) {
  console.log("Son iguales");  
}

console.log("Haz llegado al final de la zentencia");

let currenDay = new Date().getDate();
const days = {
    domingo: 0,
    lunes: 1,
    martes: 2,
    miercoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6
}

if (days.martes === currenDay){
    console.log("Hechale ganas Huerco aun no acaba la semana");
} else {
    console.log("felicidades pero a q costo !!");
}

*/

let a = 34;
let b = 23;
let c = 5;
const arrayNumeros = [a, b, c];
const arrayOrdenado = arrayNumeros.sort((a, b) => a - b);
console.log(arrayNumeros.join(','));

/*
// ----------------------- Estructura switch -------------------------------
let operador = '+';
switch(operador) {
    case '+': console.log("Se va a realizar una suma: "); break;
    case '-': console.log("Se va a realizar una resta: "); break;
    case '*': console.log("Se va a realizar una multiplicacion: "); break;
    case '/': console.log("Se va a realizar una divicion: "); break;
    default: console.log("Error !!");
}
*/

/*
//--------------------------------- switch multiple -------------------------------
const namefruits = "Strawberry";
switch (namefruits){
    case 'apple':
    case 'banana':
    case 'Strwberry':
        console.log(`${namefruits} is a fruit`); break;
    default: console.log("Is not fruit");
}
*/

/*
const foo = 5;
switch (foo){
    case 2: console.log(2); break;
    default:console.log("default");
    case 1: console.log(1);
}

let count = 0;
while (count <= 5) {
    console.log("count");
    count ++;
}
*/


/*
//Desarrollar un script que permita mostrar la tabla de multiplicar de un numero determinado
let i = 1;
const tableNumber = 6;
let result =  `la tabla del ${tableNumber} es:\n`;

while(i <= 10){
    result += `${tableNumber} * ${i} = ${tableNumber * i}\n`;
    i++;
}
console.log(result);
*/

// ----------------------Do While ---------
 count = 5;
do {
    console.log(count)
    count --;
} while (count >= 0);
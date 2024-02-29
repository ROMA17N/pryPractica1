//El profe Herahin me debe 5 puntos en la Unidad 1 Por: Linea 236
//born: !(clientData.born == "") && !(clientData.born == null) && !(clientData == undefined) ? clientData.born : 2000, 


/*
// Suma
const a = 45;
const b = 23;
const result = a + b;
console.log(`suma de ${a} + ${b} es igual a: ${result}`);
//-----------------------------------------

//Resta
const c = 45;
const d = 23;
const resultRest = c - d;
console.log(`Resta de ${a} - ${b} es igual a: ${resultRest}`);

//-------------------
//Multiplicacion
const e = 45;
const f = 23;
const resultMulti = c * d;
console.log(`Resta de ${e} - ${f} es igual a: ${resultMulti}`);
//--------------------------------------

//Division
let g = 45;
let h = 23;
let resultDiv = g / h;
//Para redondear al entero mas proximo Math.round()
console.log(`Resta de ${g} / ${h} es igual a: ${Math.round(resultDiv)}`);
//Para redondear a digitos que queramos .toFixed()
console.log(`Resta de ${g} / ${h} es igual a: ${resultDiv.toFixed(2)}`);

h = 0;
resultDiv = g / h;
console.log(`Resta de ${g} / ${h} es igual a: ${resultDiv.toFixed(2)}`);
g=0;
resultDiv = g / h;
console.log(`Resta de ${g} / ${h} es igual a: ${resultDiv.toFixed(2)}`);

//--------------
const i = 45;
const j = 2;
const resultPotencia = i ** j;
console.log(`La potenciade ${i} ** ${j} es igual a: ${resultPotencia}`);
*/
/*
//-------------------------------------
//Operador de incremento
let a = 5;
//incrementa luego imprime
console.log(++a);
//Imprime luego incrementa
console.log(a++);
console.log(a);

//------------------------
//Decremento 
let b = 5;
//incrementa luego imprime
console.log(--b);
//Imprime luego incrementa
console.log(b--);
console.log(b);
*/

/*
//---------------------------
//Serie 6,4,4,6,5,5,3
let c = 6;
console.log(c--);
console.log(--c)
console.log(c++)
console.log(++c)
console.log(--c)
console.log(c--)
console.log(--c)
*/
/*
//-----------------------
//Operadores de asignacion
let a = 6;
let b = 2;

//console.log(a += b);
//console.log(a -= b);
//console.log(a *= b);
//console.log(a /= b);
//console.log(a %= b);
console.log(a **= b);
*/

//---------------------
//Operadores de Cadena
//+
/*
let x = 1;
let y = 1;
console.log(+x + +y);

x = 2;
y = '1';
console.log(x + +y);
*/

//------------------------
//Operador de comparacion
/*
let a = 8;
let b = 8;
console.log(a == b);
console.log(a != b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
b = '8';
//Este operador compara como el dato y el tipo de dato
console.log(a === b);
console.log(a !== b);
*/

//---------------- Tablas de verdad del operador and ------------------
/*  F && F = F
    V && F = F
    F && V = F
    V && V = V
*/
//---------------- Tablas de verdad del operador and ------------------
/*  F || F = F
    V || F = V
    F || V = V
    V || V = V*/
/*
const hasGirl = true;
const isaCar = true;
const isProgramer = false;

console.log(hasGirl && isaCar);
//Invierte el resultado
console.log(!(hasGirl || isProgramer));
*/

//----- Operadore Binarios -------------------
//Comparan bit por bit
/*
let num1 = 6;
let num2 = 9;

let result = num1 & num2;
console.log(result);

result = num1 | num2;
console.log(result);

result = num1 ^ num2;
console.log(result);

//lo niega y se le suma 1
let z = 15;
console.log(~z);
z = -15;
console.log(~z);
*/
//De desplazamiento
/*
let num = 4; //Esto equivale a 110
console.log(num >>2);// imprime 1(quita los 2 numeros de ahi)
num = 7; // Esto equivale a 111
console.log(num >> 1); //Equivale a 11

let otroNum= 4; //Esto equivale a 110
console.log(otroNum <<2);// imprime 1100(quita los 2 numeros de ahi)
num = 7; // Esto equivale a 111
console.log(otroNum << 1); //Equivale a 1110
*/

//------------Operadores Especiales -------------------
//Operador ,
/*
const x = 23, y = '2', u = true;
let nameFruits = ["pera", "apple", "strawberry"];

console.log(nameFruits.push("pinaple"), nameFruits.length);

//Esto es lo mismo que hacer
//nameFruits.push("pinaple")
//console.log(nameFruits.length);
*/
/*
let a = 3+4, b = 4+4, c = 8-2;
//imprimir el valor de a
//pero elevando al cuadrado su valor
// Utilizar el valor de potencia y asignacion

console.log(`${a**=2}, b = ${b}, c = ${c}, a = ${a} `);
*/
//mostrar el valor de b y c

//------- Operador Ternario ------------
/*
let a = 20;
let b = 30;

let result = a > b?"Es mayor" : "Es menor";
console.log(result);

result = a > b?`${a} Es mayor que ${b}` : `${a} Es menor que ${b}`;
console.log(result);
*/
//Realizar un script que solicite el anio de nacimiento de una persona, y determine si es mayor de edad o en caso contrario menor de edad
//Utilizarndo el comando pront del navegador


//--------- OPERADOR TERNARIO --------------
/*
const date = new Date();
let yearBirth= parseInt(prompt ("Ingresa tu año de nacimiento "));


let message = (date.getFullYear() - yearBirth) >= 18? "Es mayor de edad" : "Es menor de edad";
alert( message );
*/


//-------------------- OPERADOR NULLISH COALESCING ----------------------
/*
let a = 1;
let b = 23;
console.log(a ?? b);*/

//Este operador verifica e valor que trae uno y otro
//Si a no tiene valor arroja b

//Ejercicio: me gane 5 .. aki ----------------------------------------------------------------------
/*
let clientData = {
        nameClient: 'Rooman',
        born: 2003,
        adress: 'null',
        phoneNumber: '9515873761',

};

let clientDataFinal = {
    nameClient: clientData.nameClient ?? 'Demetrio',
    born: !(clientData.born == "") && !(clientData.born == null) && !(clientData == undefined) ? clientData.born : 2000, 
//  born: clientDataientData.born !== "" && null && undefined ? clientData.born : 2000, 
    //born: clientData.born ?? 2000,
    adress: clientData.adress ?? 'Domicilio Conocido',
    adress: clientData.phoneNumber ?? '9510000000',
};

console.log(clientDataFinal)


//--------------------------------- Arrays -------------
*/
/*
const nameStudents = ['Dalilah', 'Emmanuel', 'Gael', 'Ivan'];
const number = [12, 45, 34, 78];

//console.log(nameStudents[2]);
console.log(nameStudents);

//Diferentes tipos de datos en el array
const margeType = ['Pedro', {nombre:'Hugo'}, function (){ console.log('Hola'); }, true, {clave : "valor"}, ];

console.log(margeType);
console.log(margeType[2]);
console.log(margeType[2]());
*/
// ------Array vacios ---

//const array1 = new Array();
//const arra2 = [];





/*
const fruits = ['apple', 'pineaple', 'banana', 'strawberry'];


console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits);

//Reemplazamos datos
fruits[0] = 'uva';
console.log(fruits);

//Insertamos datos
fruits[4] = 'Aguacate';
console.log(fruits);

fruits.push('lemon');
console.log(fruits);

console.log('Tamanio de mi array: ', fruits.length);



//Recorrido de arrays
//con for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("\n Recorrido con for each\n")

//Recorrido con for each
fruits.forEach(function(elemento){
    console.log(elemento)
});
*/





/*
const fruits = ['apple', 'pineaple', 'banana', 'strawberry'];
//--------For Each con funcion Arbol -----
fruits.forEach((Element) => console.log(Element));
*/







const fruits = ['apple', 'pineaple', 'banana', 'strawberry'];
//------------ Funcion POP -----------
// Funcion Pop Elimina el ultimo elemento y lo almacena en una variable pa mostrarlo
//const fruits = ['apple', 'pineaple', 'banana', 'strawberry'];
let ultimofruits = fruits.pop();
console.log(ultimofruits);

//----------- Funcion shift ---------
// Funcion Pop Elimina el primer elemento y lo almacena en una variable pa mostrarlo
let primerafruits = fruits.shift();
console.log(primerafruits);

//Inserta elementos
fruits.unshift("Melon", "Kiwi", "Sandia");
console.log(fruits);

//Muestra la posicion en donde se encuentra el elemento
let indice = fruits.indexOf("Melon");
console.log(indice);

//------------- Splice -----------
//Cambia el contenido de una posicion eliminando o agregando nuevos elementos en su lugar
// fruits.splice(Posicion , elementos que va a eliminar, 'Granada', 'Pera');
//Si le ponemos 0 a los elementos que vamos a eliminar solo los mueve y no elimina ninguno 
fruits.splice(1, 2, 'Granada', 'Pera');
console.log(fruits);

//--------- Slice -----------------
const nuevaLista = fruits.slice(1,3);
console.log(nuevaLista);

//----------- Sort --------
//Este metodo ordena los elementos
let numbers = [1, 2, 5, 3, 9, 0]
numbers.sort((a, z) => a - z);
console.log(numbers);


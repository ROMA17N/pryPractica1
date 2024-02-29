
//Comentario 1 linea
/**
 * Comentario por bloque
 */
/*
function varTest() {
    var x=31
    if (true){
        var x=56;
        console.log(x);
    }
    console.log(x);
}

varTest();
*/

/*
"use strict";
//Activamos el modo estricto para siempre darle el tipo de valor a la variable
var x=34
console.log(x);
*/


//var tiene ambito de funcion
//var es una mala practica (Ya es obsoleto) Mas mejor usar let
/*
function ejemploAmibitoVar(){
    if(true){
        let x=23;
    }
    console.log(x);
}
ejemploAmibitoVar();
*/

//usar 'use strict'; Al inicio de nuestro codigo pa q sea mas limpio

/*
const v=6;
function constEjemplo(){
    const v=5;
    if(true){
        const v= 70;
        console.log(v);
    }
    console.log(v);
}
console.log(v);
constEjemplo();
*/

/*
let admin;
let nameUser;

nameUser = 'John';
admin = nameUser;

console.log(admin);
alert (admin);
*/
/*
let edad = prompt('introduce tu edad');
console.log('edad ',edad);
*/

/*
let weight = undefined;
let resulFunction = function enviar() {};
let symbol = 'a';
let objPersona = {nombre: 'Victor Roman', apellidos:'Perez'};
let arrayNameFruits = ['pera', 'manzana', 'Mandarina'];

console.log(arrayNameFruits);
console.log(`resulFunction:${typeof name}`);*/
/*
let nameUser ='Ejemplo: "Comillas dobles"';
let nameAdmin = "Ejemplo: 'Comillas dobles'";
console.log(`Esta es una comilla francesa`);

console.log(`Francesa:${nameUser}`);
console.log(`Francesa:${nameUser} mas texto ${nameAdmin}`);*/


/*
let name = "Ilia";
alert( `hello ${1}` );
alert( `hello ${"name"}` );
alert( `hello ${name}` );*/



//Para enviar un nuevo commit ejecutamos estos comandos
/*git add .
git commit -m "  "
git push -u origin main */

//Con Date() recuperamos toda la fecha de nuestra maquina 
/*const date = new Date();

let nameUser = prompt("Ingresa tu nombre: ");
let numControl= prompt ("Ingresa tu numero de control: ");
let birthday = prompt ('Ingresa tu anio de nacimiento: ');
const age = date.getFullYear() - birthday;

console.log(`Los datos del alumno son: \n nombre:${nameUser} numero de control${numControl}\n edad: ${age}`);*/

/*let heigt = parseFloat(prompt("Ingrese la altura del triangulo"));
let weight = parseFloat(prompt("Ingrese el ancho del rectangulo"));

perimetro = (2 * heigt) + (2 * weight)
console.log("El perimetro es: " + perimetro);*/

//console.log('anio de nacimiento es: ', birthday);

/*const gender = prompt('Ingresa tu genero: ').charAt(0);
console.log(gender);*/

//Clave: Valor 
/*
let jsonString = '{"Marca":"LG", "Modelo":"Zpluz","Ram":12,"Procesador":"Snapdragon 820"}';
let cadenaNoparseada = jsonString;
console.log(`Cadena no parseada: ${cadenaNoparseada}`);
let StringParseado = JSON.parse(jsonString);
console.log(`Cadena parceada:${StringParseado}`);
*/


//--------- OPERADOR TERNARIO --------------
/*
const date = new Date();
let yearBirth= parseInt(prompt ("Ingresa tu año de nacimiento "));


let message = (date.getFullYear() - yearBirth) >= 18? "Es mayor de edad" : "Es menor de edad";
alert( message );

*/
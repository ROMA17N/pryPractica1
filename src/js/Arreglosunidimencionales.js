

//EJERCICIO 1.- Realiza una suma de un array de enteros utilizando el metodo reduceRight (), ciclo for y forEach
const array = [1, 2, 3, 4, 5];
const sumaReduceRight = array.reduceRight((total, current) => total + current, 0);
console.log(sumaReduceRight);

//EJERCICO 2.- Dado un areglo de numeros enteros positivos y negativos, utilicen el metodo Mathmax() y el operador de programacion, para encontrar el numero mayor
const ArrayNums = [1, -2, 3, -4, 5, 6, 7, -10, 20, -34, 100];

const NumMax = Math.max(...ArrayNums);

console.log(`El número mayor en el array es: ${NumMax}`);


//EJERCICO 3.- Dado un arreglo de numeros de 10 estudiantes, usar el metodo filter()para filtar unicamente los nombres con una de las letras en especifico



const Letra = "j";

let ArrayAlumnos = ['Juan', 'Pedro', 'Luis', 'Ronaldo', 'Pepe', 'Ramiro'];

let FilterName = ArrayAlumnos.filter(ArrayAlumnos => ArrayAlumnos.startsWith(Letra) );

console.log(`Los nombres que empiezan con la letra ${Letra} , son los siguientes: `, (FilterName));

 

//EJERCICO 4.- Dado un array de un numero entero positivo, determinar el total de numeros pares existentes
function encontrarPares(numeros) {
    let i = 0;
    for (let num of numeros) {
        if ((num % 2) === 0) {
            i++;
        }
    }
    return i;
}

let numeros = [2,3,5,7,9,10,18];
let totalPares = encontrarPares(numeros);
console.log("total de numeros pares existentes:", totalPares);













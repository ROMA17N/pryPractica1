// Ejercicio: desarrollar un script que imprima en orden descendente de 3 numeros dados


const numero = {
    num1: parseInt(prompt("Introduce el primer numero")),
    num2: parseInt(prompt("Introduce el segundo numero")),
    num3: parseInt(prompt("Introduce el tercer numero"))
}

if((numero.num1 > numero.num2) && (numero.num1 > numero.num3)){
    if(numero.num2 > numero.num3){
        console.log(numero.num1, numero.num2, numero.num3)
    } else {
        console.log(numero.num1, numero.num3, numero.num2)
    }
} else if((numero.num2 > numero.num1) && (numero.num2 > numero.num3)){
    if(numero.num1 > numero.num3){
        console.log(numero.num2, numero.num1, numero.num3)
    } else {
        console.log(numero.num2, numero.num3, numero.num1)
    }
} else if((numero.num1 > numero.num2)){
    console.log(numero.num3, numero.num1, numero.num2)
} else {
    console.log(numero.num3, numero.num2, numero.num1) }

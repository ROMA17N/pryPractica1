
// ----------------------------------------- TEMA: COLECCIONES CON CLAVE --------------------------------------------------------------------
// ----------------- map y set -------------

let miMapa = new Map();
///Agregar elementos al mapa
miMapa.set('clave1', 'rojo');
miMapa.set('clave2', 'negro');
miMapa.set('adress', 'Jazmines 203');
miMapa.set('clave4', 'Jazmines 203');

console.log(miMapa.get('clave4'));

/*
// Para recorrer  miMap con bucle foreach ------------------------------------
//checar el orden el el q ponemos clave y element
miMapa.forEach((element, clave) =>
    console.log(`${element}: ${clave}`)
);
*/

/*
// -------------------- recorrido con forOF ----------------------
for (let [clave, valor] of miMapa) {
    console.log(`${clave}: ${valor}`);
}
*/

/*
// ---------------------------------------- recorrido con for y values --------------------------------------
for (let valor of miMapa.values()) {
    console.log(valor);
}
*/


// ================================================== SET =========================================================================
const objSet = new Set();
objSet.add('elemento1');
objSet.add('elemento2');
objSet.add('elemento3');
objSet.add("elemento3");

/*
// ------------- Recuperar valores con for Each -------
objSet.forEach(element => {
    console.log(element);
});
*/

/*
// -------------------- recorrido con forOF ----------------------
for (let element of objSet) {
    console.log(element);
}
*/


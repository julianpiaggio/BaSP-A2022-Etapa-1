console.log('--EXCERCISE 3: Arrays');

/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log). */
console.log('-- EXCERCISE 3.A:');

 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
 "Noviembre", "Diciembre"];

 console.log(months[4]);
 console.log(months[10]);

 /*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
 console.log('-- EXCERCISE 3.B:');

 months.sort();
 console.log(months);

 /*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
 console.log('-- EXCERCISE 3.C:');

 months.unshift('Age');
 months.push('Week');

 console.log(months);

 /* Quitar un elemento del principio y del final del array (utilizar shift y pop). */
 console.log('-- EXCERCISE 3.D:');

 months.shift();
 months.pop();

 console.log(months);

 /* Invertir el orden del array (utilizar reverse). */
 console.log('-- EXCERCISE 3.E:');

 months.reverse();

 console.log(months);

 /*Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
 console.log('-- EXCERCISE 3.F:');

 var monthsChain = months.join(' - ');
 
 console.log(monthsChain);

 /* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
 console.log('-- EXCERCISE 3.G:');

 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
 "Noviembre", "Diciembre"];
 
 var littleMonths = months.slice(4,11);

 console.log(littleMonths);
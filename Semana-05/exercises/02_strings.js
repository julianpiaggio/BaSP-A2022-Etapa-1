console.log('--EXCERCISE 2: STRINGS');

/*Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula
(utilizar toUpperCase).*/
console.log('-- EXCERCISE 2.A:');

var perfectDay = 'today is a perfect day.';
console.log(perfectDay.toUpperCase());

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
guardando el resultado en una nueva variable (utilizar substring)*/
console.log('-- EXCERCISE 2.B:');

var friday = 'today is Friday';
var littleFriday = friday.substring(0,5);
console.log(littleFriday);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
//guardando el resultado en una nueva variable (utilizar substring)
console.log('-- EXCERCISE 2.C:');

var wonderfullDay = 'today is a wonderful day';
var lastwonderfullDay = wonderfullDay.substring(20,24);
console.log(lastwonderfullDay);

/*Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).*/
console.log('-- EXCERCISE 2.D:');

var specialDay = 'today is a special day';
var nestedSpecialDay = specialDay.substring(0,1).toUpperCase() + specialDay.substring(1,22).toLowerCase();
console.log(nestedSpecialDay)

/* Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('-- EXCERCISE 2.E:');

var car = 'the car is red';
var whiteSpaceCar = car.indexOf(' ');
console.log(whiteSpaceCar);

/*Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
y el operador +).*/
console.log('-- EXCERCISE 2.F:');

var asynchronous = 'asynchronous content';
var asynchronousIndex = asynchronous.indexOf(' ') + 1;
var asynchronousModify = (asynchronous.substring(0,1).toUpperCase() + asynchronous.substring(1,asynchronousIndex).toLowerCase()  + 
asynchronous.substring(asynchronousIndex,asynchronousIndex + 1).toUpperCase() + asynchronous.substring(asynchronousIndex + 1, asynchronous.length).toLowerCase());
console.log(asynchronousModify);

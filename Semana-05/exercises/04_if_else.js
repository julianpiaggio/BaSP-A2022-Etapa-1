console.log('--EXCERCISE 4:If Else');

/*Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/
console.log('-- EXCERCISE 4.A:');

var number = Math.random();

if (number >= 0.5) {
    alert('Greater than 0,5');
} else {
    alert('Lower than 0,5');
}

/* Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años;
“Niño” si la edad es entre 2 y 12 años;
“Adolescente” entre 13 y 19 años;
“Joven” entre 20 y 30 años;
“Adulto” entre 31 y 60 años;
“Adulto mayor” entre 61 y 75 años;
“Anciano” si es mayor a 75 años.
*/
console.log('-- EXCERCISE 4.B:');

var age = Math.floor(Math.random()*100);

if (age < 2) {
    alert('Bebe',age);
} else if (age >= 2 && age < 13) {
    alert('Niño',age);
} else if (age >=12 && age < 20) {
    alert('Adolescente',age);
} else if (age >= 20 && age < 31) {
    alert('Joven',age);
} else if (age >=31 && age < 61) {
    alert('Adulto',age);
} else if (age >=61 && age < 76) {
    alert('Adulto mayor',age);
} else {
    alert('Anciano',age);
}
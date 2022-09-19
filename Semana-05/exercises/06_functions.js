console.log('--EXCERCISE 6:functions');

/*Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
console.log('-- EXCERCISE 6.A:');

function sum(number1, number2){
    return number1 + number2;
}

var sumResult = sum(15,25);
console.log(sumResult);

/*A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de
no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como 
resultado.*/
console.log('-- EXCERCISE 6.B:');

function sum(number1 , number2){
    if ( typeof number1 === 'number' && typeof number2 === 'number') {
        alert('both parameters are numbers');
        return sumResult = number1 + number2;
    } if (typeof number1 !== 'number') {
        alert('parameter 1 is not a number')
        return NaN;
    } if (typeof number2 !== 'number') {
        alert('parameter 2 is not a number')
        return NaN;
    }
}

console.log(sum('mama',12));
console.log(sum(18,12));

/*Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número
 entero. */
 console.log('-- EXCERCISE 6.C:');

 function validateIntriger(number){
    return Number.isInteger(number)
};

 console.log(validateIntriger(6.5));
 console.log(validateIntriger(10));

 /*A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los 
 números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a 
 entero (redondeado).*/
 console.log('-- EXCERCISE 6.D:');

 function sum2(number1 , number2){
    if (typeof number1 !== 'number') {
        alert('parameter 1 is not a number')
        return NaN;
    } if (typeof number2 !== 'number') {
        alert('parameter 2 is not a number')
        return NaN;
    } if(validateIntriger(number1)){
        alert('is not an integer');
        number1= Math.round(number1);
    } if(validateIntriger(number2) == false){
        alert('is not an integer');
        number2= Math.round(number2);
    }
        return number1 + number2;
    }

console.log(sum2(5,11.6));

/* Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
 que todo siga funcionando igual. */

 console.log('-- EXCERCISE 6.E:');

 function sum3(number1 , number2){
    number1= validate(number1);
    number2=validate(number2);
    return sumResult = number1 + number2;
    }

function validate(number1){
    if (typeof number1 !== 'number') {
        alert('one of the parameters is not a number');
        return NaN;
    } if(validateIntriger(number1) == false){
        alert('is not an integer');
        number1= Math.round(number1);
    }
    return number1;
}
console.log(sum3(11.6,22.5));
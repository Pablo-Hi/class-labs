// Ejercicio de clase 1

// let contar = 0;
//   for (let i = 0; i <= 100; i++) {
//   console.log(i)  
//     contar = contar + i;
//   }
//     console.log(contar);


// Ejercicio de clase 2

// let numbers = [1, 3, 5, 6, 2, 3, 8, 4, 5, 9, 6, 4];

// let smallest = numbers[0];
// let largest = numbers[0];

// for(let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//         smallest = numbers[i]; 
//     }

//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log("Smallest number: " + smallest);
// console.log("Largest number: " + largest);


// Ejercicio 3

// let evenNumber = 2;

// while ( evenNumber <= 20){
//     console.log(evenNumber);,
//     evenNumber += 2;
// }

// Ejercicio 4
    
let numeroAdivinar = 7;
let numeroIngresado = 0;
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let intentos = 0;

do {
    numeroIngresado = arrayNumeros[intentos];
    intentos++
} while (numeroIngresado != numeroAdivinar);

console.log(`El número a adivinar era ${numeroAdivinar} y se adivinó en ${intentos} intentos.`);



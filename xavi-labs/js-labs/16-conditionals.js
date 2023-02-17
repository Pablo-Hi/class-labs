//Ejercicio 1

// const ageDiscount = parseInt(prompt("Enter your age:"));

// switch (ageDiscount) {
//     case <= 5:
//       console.log('Gratis!');
//       break;
//     case < 15:
//       console.log('Tienes un 20% de descuento!');
//       break   
//     case >= 15 && <=60:
//       console.log('Precio sin descuento');
//       break   
//     case > 60:
//       console.log('Tienes un 40% de descuento!');
//       brea
//     default:
//         console.log('Enter a valid character');
//   }


const name = prompt("Enter your name");
const action = prompt("Enter your action:");

switch (action) {
  case "greet":
    console.log(`Hello, + ${name}`);
    break;
  case "say bye":
    console.log(`Bye bye, + ${name}`);
    break;
  case "ask":
    console.log(`How are you today, + ${name}`);
    break;
  case "scream":
    console.log('AHHHHHHHH!!!!!!!');
    break;
  case "rest":
    console.log('I am signing off now.');
    break;
  default:
     console.log("I don't know how to do that yet, I'm just a little program")
     break;
}

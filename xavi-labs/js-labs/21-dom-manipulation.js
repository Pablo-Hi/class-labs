// Parte 1

console.log(document.getElementById("insert-p"));

let newElement= document.createElement("p");
let newVar = document.querySelector("#insert-p").appendChild(newElement);

console.log(newElement);


// Parte 2

let div = document.createElement("div");
div.id ="nested";

console.log(div);


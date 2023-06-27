//1
const seccion1 = document.getElementsByTagName('ul');
console.log(seccion1);

//2
const seccion2 = document.querySelector('#container');
console.log(seccion2);

//3
const elemento = document.querySelector('.second');
console.log(elemento);
//4
const elemento2 = document.querySelector('ol .third ');
console.log(elemento2);
//5
var parrafo = document.createElement('p');
var texto = document.createTextNode('¡Hola!');
parrafo.appendChild(texto);
seccion2.appendChild(parrafo);
//6
let pie = document.querySelector('.footer');
pie.className ="main";
console.log(pie);

//7, 8 y 9

let li = document.createElement('li');
let texto2 = document.createTextNode('cuatro');
li.appendChild(texto2);

let lista = document.querySelector('#container ul');
lista.appendChild(li);









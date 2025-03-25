// Actividad OBLIGATORIA ENTREGABLE (fecha maxima de entrega miercoles 19 de marzo).

// Crear una clase Auto con atributos (marca, modelo, anio).
// Agregar métodos (constructor(), acelerar(), frenar()).
// Instanciar objetos y probar métodos.

import { Auto } from "./Auto";

let auto1 = new Auto("Ford","Focus",2025);
let auto2 = new Auto("Honda","Civic",2022);

console.log(auto1);
console.log(auto2);

//NO ESTA FUNCIONANDO, CHEQUEAR
auto1.cambiarMarca("chevrolet");

// auto1.acelerar();
// console.log("Esta acelerando " + auto1.estaEnMoviemiento);

// auto1.frenar();
// console.log("Esta acelerando " + auto1.estaEnMoviemiento);
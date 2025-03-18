"use strict";
// Actividad OBLIGATORIA ENTREGABLE (fecha maxima de entrega miercoles 19 de marzo).
Object.defineProperty(exports, "__esModule", { value: true });
// Crear una clase Auto con atributos (marca, modelo, anio).
// Agregar métodos (constructor(), acelerar(), frenar()).
// Instanciar objetos y probar métodos.
var Auto_1 = require("./Auto");
var auto1 = new Auto_1.Auto("Ford", "Focus", 2025);
var auto2 = new Auto_1.Auto("Honda", "Civic", 2022);
console.log(auto1);
console.log(auto2);
auto1.acelerar();
console.log("Esta acelerando " + auto1.estaEnMoviemiento);
auto1.frenar();
console.log("Esta acelerando " + auto1.estaEnMoviemiento);

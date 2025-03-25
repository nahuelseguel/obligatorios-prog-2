"use strict";
// Se debe crear una clase Celular que represente un teléfono móvil.
// Requisitos:
// Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
// Constructor con parámetros opcionales y obligatorios:
// Obligatorios: Marca, modelo y sistema operativo.
// Opcionales: Memoria RAM (por defecto 4GB), almacenamiento interno (por defecto 64GB) y estado de encendido (por defecto apagado).
// Métodos adicionales:
// encenderApagar(): Cambia el estado de encendido/apagado del celular.
// mostrarInfo(): Retorna una cadena con los datos del celular.
Object.defineProperty(exports, "__esModule", { value: true });
var Celular_1 = require("./Celular");
var celular1 = new Celular_1.Celular("Nokia", "5200", "Android", undefined, undefined, undefined);
var celular2 = new Celular_1.Celular("Samsung", "S23 ULTRA", "Android", "8GB", "1T", true);
console.log(celular1.mostrarDatos());
celular1.encenderApagar();
console.log(celular1.mostrarDatos());
console.log(celular2.mostrarDatos());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FabricarAnimal_1 = require("./FabricarAnimal");
var fabrica = new FabricarAnimal_1.FabricaAnimal();
var perro = fabrica.crearAnimal("perro");
var gato = fabrica.crearAnimal("gato");
var pajaro = fabrica.crearAnimal("pajaro");
perro.hacerSonido();
perro.mover();
console.log("\n------------------------------------------\n");
gato.hacerSonido();
gato.mover();
console.log("\n------------------------------------------\n");
pajaro.hacerSonido();
pajaro.mover();
console.log("\n------------------------------------------\n");
try {
    var tigre = fabrica.crearAnimal("Tigre");
    console.log(tigre);
}
catch (error) {
    console.log(error.name + " " + error.message);
}

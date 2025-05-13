"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaAnimal = void 0;
var Perro_1 = require("./Perro");
var Gato_1 = require("./Gato");
var Pajaro_1 = require("./Pajaro");
var FabricaAnimal = /** @class */ (function () {
    function FabricaAnimal() {
    }
    FabricaAnimal.prototype.crearAnimal = function (tipo) {
        if (tipo === "perro") {
            return new Perro_1.Perro();
        }
        else if (tipo === "gato") {
            return new Gato_1.Gato();
        }
        else if (tipo === "pajaro") {
            return new Pajaro_1.Pajaro();
        }
        else {
            throw new Error("No esta dentro de los animales estipulados.");
        }
    };
    return FabricaAnimal;
}());
exports.FabricaAnimal = FabricaAnimal;

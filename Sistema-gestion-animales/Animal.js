"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(pNombre) {
        this.nombre = pNombre;
    }
    Animal.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Animal.prototype.moverse = function () {
        console.log("".concat(this.nombre, " se mueve..."));
    };
    Animal.prototype.emitirSpnido = function () {
        console.log("".concat(this.nombre, " esta emitiendo sonido."));
    };
    return Animal;
}());
exports.Animal = Animal;

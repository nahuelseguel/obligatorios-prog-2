"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
var Perro = /** @class */ (function () {
    function Perro() {
        this.ladrido = "¡Guau!";
        this.correr = "Corriendo";
    }
    Perro.prototype.hacerSonido = function () {
        console.log("El perro dice: ".concat(this.ladrido));
    };
    Perro.prototype.mover = function () {
        console.log("El perro esta ".concat(this.correr));
    };
    return Perro;
}());
exports.Perro = Perro;

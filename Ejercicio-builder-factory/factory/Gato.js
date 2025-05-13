"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato() {
        this.maullido = "¡Miau!";
        this.saltar = "Saltando";
    }
    Gato.prototype.hacerSonido = function () {
        console.log("El gato dice: ".concat(this.maullido));
    };
    Gato.prototype.mover = function () {
        console.log("El gato esta ".concat(this.saltar));
    };
    return Gato;
}());
exports.Gato = Gato;

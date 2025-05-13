"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pajaro = void 0;
var Pajaro = /** @class */ (function () {
    function Pajaro() {
        this.silvar = "Silvido";
        this.volar = "Volando";
    }
    Pajaro.prototype.hacerSonido = function () {
        console.log("El pajaro dice: ".concat(this.silvar));
    };
    Pajaro.prototype.mover = function () {
        console.log("El pajaro esta ".concat(this.volar));
    };
    return Pajaro;
}());
exports.Pajaro = Pajaro;

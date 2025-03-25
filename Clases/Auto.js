"use strict";
// Actividad OBLIGATORIA ENTREGABLE (fecha maxima de entrega miercoles 19 de marzo).
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
// Crear una clase Auto con atributos (marca, modelo, anio).
// Agregar métodos (constructor(), acelerar(), frenar()).
// Instanciar objetos y probar métodos.
var Auto = /** @class */ (function () {
    function Auto(pMarca, pModelo, pAño) {
        this.estaEnciendido = false;
        this.estaEstacionado = false;
        this.estaEnMoviemiento = false;
        // this.marca = pMarca;
        this.modelo = pModelo;
        this.año = pAño;
    }
    Auto.prototype.encenderApagar = function (estaEnciendido) {
        if (this.estaEnciendido) {
            this.estaEnciendido = true;
        }
    };
    Auto.prototype.acelerar = function () {
        if (!this.estaEnciendido && !this.estaEstacionado) {
            console.log("Acelerar");
            this.estaEnMoviemiento = true;
        }
    };
    Auto.prototype.frenar = function () {
        if (this.estaEnMoviemiento) {
            this.estaEnMoviemiento = false;
            console.log("frenar");
        }
    };
    Auto.prototype.cambiarMarca = function (pmarca) {
        this.marca = pmarca;
    };
    return Auto;
}());
exports.Auto = Auto;

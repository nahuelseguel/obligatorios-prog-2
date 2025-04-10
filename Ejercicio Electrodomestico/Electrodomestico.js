"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(pMarca, pModelo) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaEncendido = false;
    }
    Electrodomestico.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Electrodomestico.prototype.getMarca = function () {
        return this.marca;
    };
    Electrodomestico.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    Electrodomestico.prototype.getModelo = function () {
        return this.modelo;
    };
    Electrodomestico.prototype.Encender = function () {
        if (!this.estaEncendido) {
            this.estaEncendido = true;
        }
    };
    Electrodomestico.prototype.apagar = function () {
        if (this.estaEncendido) {
            this.estaEncendido = false;
        }
    };
    Electrodomestico.prototype.getInfoElectrodomestico = function () {
        return "Marca: ".concat(this.marca, "\n                Modelo: ").concat(this.modelo, "\n                Encendido: ").concat(this.estaEncendido);
    };
    return Electrodomestico;
}());
exports.Electrodomestico = Electrodomestico;

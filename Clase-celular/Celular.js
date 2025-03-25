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
exports.Celular = void 0;
var Celular = /** @class */ (function () {
    function Celular(pMarca, pModelo, pSistemaOperativo, pMemoriaRam, pAlmacenamientoInterno, pEncendido) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.sistemaOperativo = pSistemaOperativo;
        this.memoriaRam = pMemoriaRam !== null && pMemoriaRam !== void 0 ? pMemoriaRam : "4GB";
        this.almacenamientoInterno = pAlmacenamientoInterno !== null && pAlmacenamientoInterno !== void 0 ? pAlmacenamientoInterno : "64GB";
        this.encendido = pEncendido !== null && pEncendido !== void 0 ? pEncendido : false;
    }
    Celular.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Celular.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    Celular.prototype.setSistemaOperativo = function (pSistemaOperativo) {
        this.sistemaOperativo = pSistemaOperativo;
    };
    Celular.prototype.setMemoriaRam = function (pMemoriaRam) {
        this.memoriaRam = pMemoriaRam;
    };
    Celular.prototype.setAlmacenamiento = function (pMarca) {
        this.marca = pMarca;
    };
    Celular.prototype.setEncendido = function (pEncendido) {
        this.encendido = pEncendido;
    };
    Celular.prototype.getMarca = function () {
        return this.marca;
    };
    Celular.prototype.getModelo = function () {
        return this.modelo;
    };
    Celular.prototype.getSistemaOperativo = function () {
        return this.sistemaOperativo;
    };
    Celular.prototype.getMemoriaRam = function () {
        return this.memoriaRam;
    };
    Celular.prototype.getAlmacenamiento = function () {
        return this.marca;
    };
    Celular.prototype.getEncendido = function () {
        return this.encendido;
    };
    Celular.prototype.encenderApagar = function () {
        if (!this.encendido) {
            this.encendido = true;
        }
        else {
            this.encendido = false;
        }
    };
    Celular.prototype.mostrarDatos = function () {
        return "Marca: ".concat(this.marca, ".\n                Modelo: ").concat(this.modelo, ".\n                Sistema operativo: ").concat(this.sistemaOperativo, ".\n                Memoria RAM: ").concat(this.memoriaRam, ".\n                Almacenamiento: ").concat(this.almacenamientoInterno, ".\n                Esta encendido: ").concat(this.encendido, ".");
    };
    return Celular;
}());
exports.Celular = Celular;

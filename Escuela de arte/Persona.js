"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pApellido, pFechaDeNacimiento, pDNI) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.fechaDeNacimiento = pFechaDeNacimiento;
        this.DNI = pDNI;
    }
    Persona.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Persona.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Persona.prototype.setFechaDeNacimiento = function (pFechaDeNacimiento) {
        this.fechaDeNacimiento = pFechaDeNacimiento;
    };
    Persona.prototype.setDNI = function (pDNI) {
        this.DNI = pDNI;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getFechaDeNacimiento = function () {
        return this.fechaDeNacimiento;
    };
    Persona.prototype.getDNI = function () {
        return this.DNI;
    };
    Persona.prototype.getInfo = function () {
        console.log("Nombre: ".concat(this.nombre, ".\n\n            Apellido: ").concat(this.apellido, ".\n\n            Fecha de nacimiento: ").concat(this.fechaDeNacimiento, ".\n\n            DNI: ").concat(this.DNI, "."));
    };
    return Persona;
}());
exports.Persona = Persona;

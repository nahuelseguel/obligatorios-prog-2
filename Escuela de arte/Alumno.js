"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Persona_1 = require("./Persona");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(pNombre, pApellido, pFechaDeNacimiento, pDNI, pNota) {
        var _this = _super.call(this, pNombre, pApellido, pFechaDeNacimiento, pDNI) || this;
        _this.nota = pNota;
        return _this;
    }
    Alumno.prototype.setNota = function (pNota) {
        this.nota = pNota;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.getInfo = function () {
        _super.prototype.getInfo.call(this);
        console.log("Nota: ".concat(this.nota));
    };
    return Alumno;
}(Persona_1.Persona));
exports.Alumno = Alumno;

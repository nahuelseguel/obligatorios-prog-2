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
exports.Profesor = void 0;
var Persona_1 = require("./Persona");
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(pNombre, pApellido, pFechaDeNacimiento, pDNI, pSalario) {
        var _this = _super.call(this, pNombre, pApellido, pFechaDeNacimiento, pDNI) || this;
        _this.salario = pSalario;
        return _this;
    }
    Profesor.prototype.setSalario = function (pSalario) {
        this.salario = pSalario;
    };
    Profesor.prototype.getSalario = function () {
        return this.salario;
    };
    Profesor.prototype.getInfoProfesor = function () {
        _super.prototype.getInfo.call(this);
        console.log("Salario: ".concat(this.salario, "."));
    };
    return Profesor;
}(Persona_1.Persona));
exports.Profesor = Profesor;

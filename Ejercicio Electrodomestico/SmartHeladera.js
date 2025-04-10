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
exports.SmartHeladera = void 0;
var Heladera_1 = require("./Heladera");
var SmartHeladera = /** @class */ (function (_super) {
    __extends(SmartHeladera, _super);
    function SmartHeladera(pMarca, pModelo, pTemperatura, pConexion, pRed) {
        var _this = _super.call(this, pMarca, pModelo, pTemperatura) || this;
        _this.conexion = pConexion;
        _this.red = pRed;
        return _this;
    }
    SmartHeladera.prototype.getConexion = function () {
        return this.conexion;
    };
    SmartHeladera.prototype.getRed = function () {
        return this.red;
    };
    SmartHeladera.prototype.conectarInternet = function (pRed) {
        this.red = pRed;
        console.log("Se conecto a la red: ".concat(pRed));
    };
    SmartHeladera.prototype.getInfo = function () {
        return "Info base: ".concat(this.getInfoElectrodomestico, "\n                Temperatura: ").concat(this.temperatura, "\n                Conexion a internet: ").concat(this.conexion, "\n").concat(this.conectarInternet);
    };
    return SmartHeladera;
}(Heladera_1.Heladera));
exports.SmartHeladera = SmartHeladera;

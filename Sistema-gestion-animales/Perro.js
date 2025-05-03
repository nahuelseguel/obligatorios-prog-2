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
exports.Perro = void 0;
var Animal_1 = require("./Animal");
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(pNombre) {
        var _this = _super.call(this, pNombre) || this;
        _this.dieta = "Carne, Alimento, Agua";
        return _this;
    }
    Perro.prototype.tipoDeDieta = function () {
        console.log("".concat(this.dieta, " es la dieta diaria de ").concat(this.nombre, "."));
    };
    Perro.prototype.emitirSpnido = function () {
        console.log("".concat(this.nombre, " \u00A1Guau!"));
    };
    return Perro;
}(Animal_1.Animal));
exports.Perro = Perro;

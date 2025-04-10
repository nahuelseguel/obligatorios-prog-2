"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuloWifi = void 0;
var ModuloWifi = /** @class */ (function () {
    function ModuloWifi(pVelocidadMbps, pFrecuenciaGHz) {
        this.velocidadMbps = pVelocidadMbps;
        this.frecuenciaGHz = pFrecuenciaGHz;
    }
    ModuloWifi.prototype.setVelocidadMbps = function (pVelocidadMbps) {
        this.velocidadMbps = pVelocidadMbps;
    };
    ModuloWifi.prototype.setFrecuenciaGHz = function (pFrecuenciaGHz) {
        this.frecuenciaGHz = pFrecuenciaGHz;
    };
    ModuloWifi.prototype.getVelocidadMbps = function () {
        return this.velocidadMbps;
    };
    ModuloWifi.prototype.getfrecuenciaGHz = function () {
        return this.frecuenciaGHz;
    };
    return ModuloWifi;
}());
exports.ModuloWifi = ModuloWifi;

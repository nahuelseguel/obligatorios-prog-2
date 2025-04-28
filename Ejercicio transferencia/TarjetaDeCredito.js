"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarjetDeCredito = void 0;
var TarjetDeCredito = /** @class */ (function () {
    function TarjetDeCredito(pNumeroDeTarjeta, pTransferir) {
        this.cuotas = 12;
        this.entidad = "Visa";
        this.numeroDeTarjeta = pNumeroDeTarjeta;
        this.mercadoP = "Mercado Pago";
        this.transferir = pTransferir;
    }
    TarjetDeCredito.prototype.procesarPago = function () {
        console.log("La tarjeta numero : ".concat(this.numeroDeTarjeta, " pertenece a la entidad: ").concat(this.entidad, " y se puede pagar hasta ").concat(this.cuotas, " cuotas  "));
    };
    TarjetDeCredito.prototype.cancelarPago = function () {
        console.log("El pago ha sido cancelado");
    };
    TarjetDeCredito.prototype.generarRecibo = function (pNumeroDeTarjeta) {
        console.log("El pago de la tarjeta numero : ".concat(this.numeroDeTarjeta, " ha sido exitoso"));
    };
    TarjetDeCredito.prototype.transferencia = function (pTransferir) {
        console.log("Se transfirieron: ".concat(this.transferir, " de la entidad: ").concat(this.entidad));
    };
    TarjetDeCredito.prototype.mercadoPago = function (pTransferir) {
        console.log("Se transfirieron: ".concat(this.transferir, " por medio de: ").concat(this.mercadoP));
    };
    return TarjetDeCredito;
}());
exports.TarjetDeCredito = TarjetDeCredito;

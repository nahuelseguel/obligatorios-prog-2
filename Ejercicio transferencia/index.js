"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TarjetaDeCredito_1 = require("./TarjetaDeCredito");
var tarjeta = new TarjetaDeCredito_1.TarjetDeCredito(40000, 500);
tarjeta.generarRecibo(4000); //generarRecibo solo toma el parametro de su metodo, no el del constructor.
tarjeta.transferencia(700);
tarjeta.mercadoPago(500);

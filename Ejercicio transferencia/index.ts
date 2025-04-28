import { TarjetDeCredito } from "./TarjetaDeCredito";

let tarjeta: TarjetDeCredito = new TarjetDeCredito(40000, 500);

tarjeta.generarRecibo(4000);//generarRecibo solo toma el parametro de su metodo, no el del constructor.
tarjeta.transferencia(700);
tarjeta.mercadoPago(500);

export interface IPago {
  procesarPago():void;
  cancelarPago():void;
  generarRecibo(pNumeroDeTarjeta:number):void;//El metodo generarRecibo no ejecutaba lo que contenia porque le faltaba el parametro.
  transferencia(pTransferir:number):void;//El metodo transferencia no ejecutaba lo que contenia porque le faltaba el parametro.
  mercadoPago(pTransferir:number):void;
}

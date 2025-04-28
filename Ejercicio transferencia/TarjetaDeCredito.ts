import { IPago } from "./IPago";

export class TarjetDeCredito implements IPago {
    private cuotas:number;
    private entidad:string;
    private numeroDeTarjeta:number;
    private mercadoP:string;
    private transferir:number;
  
    constructor(pNumeroDeTarjeta:number, pTransferir:number) {
      this.cuotas = 12;
      this.entidad = "Visa";
      this.numeroDeTarjeta = pNumeroDeTarjeta;
      this.mercadoP = "Mercado Pago"
      this.transferir = pTransferir;

    }
  
    procesarPago(): void {
      console.log(`La tarjeta numero : ${this.numeroDeTarjeta} pertenece a la entidad: ${this.entidad} y se puede pagar hasta ${this.cuotas} cuotas  `)
    }
  
    cancelarPago(): void {
      console.log("El pago ha sido cancelado");
    }
  
    generarRecibo(pNumeroDeTarjeta:number): void {//Parametro aplicado en la interface tambien(buena practica?).
      console.log(`El pago de la tarjeta numero : ${this.numeroDeTarjeta} ha sido exitoso`);
    }
  
    transferencia(pTransferir:number): void {//Parametro aplicado en la interface tambien(buena practica?).
        console.log(`Se transfirieron: ${this.transferir} de la entidad: ${this.entidad}`)
    }

    mercadoPago(pTransferir:number): void {
        console.log(`Se transfirieron: ${this.transferir} por medio de: ${this.mercadoP}`)
    }
  }
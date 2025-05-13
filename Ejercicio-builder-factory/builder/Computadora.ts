export class Computadora{

    protected procesador: string;
    protected ram: number;
    protected alamcenamiento: string;
    protected tarjetaGrafica: string;
    protected sistemaOperativo: string;

    constructor(pProcesador:string,pRam:number,pAlmacenamiento:string,pTarjetaGrafica:string,pSistemaOperativo:string){

        this.procesador = pProcesador;
        this.ram = pRam;
        this.alamcenamiento = pAlmacenamiento;
        this.tarjetaGrafica = pTarjetaGrafica;
        this.sistemaOperativo = pSistemaOperativo;

    }

    public toString():string{
        return `\nProcesador: ${this.procesador}.
                \nRAM: ${this.ram}.
                \nAlmacenamiento: ${this.alamcenamiento}.
                \nTarjeta grafica: ${this.tarjetaGrafica}.
                \nSistema operativo: ${this.sistemaOperativo}.`
    }

}
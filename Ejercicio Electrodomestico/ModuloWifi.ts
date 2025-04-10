export class ModuloWifi{

    protected velocidadMbps:number;
    protected frecuenciaGHz:number;

    constructor(pVelocidadMbps:number,pFrecuenciaGHz:number){

        this.velocidadMbps = pVelocidadMbps;
        this.frecuenciaGHz = pFrecuenciaGHz;

    }

    public setVelocidadMbps(pVelocidadMbps:number):void{
        this.velocidadMbps = pVelocidadMbps;
    }

    public setFrecuenciaGHz(pFrecuenciaGHz:number):void{
        this.frecuenciaGHz = pFrecuenciaGHz;
    }

    public getVelocidadMbps():number{
        return this.velocidadMbps;
    }

    public getfrecuenciaGHz():number{
        return this.frecuenciaGHz;
    }

}
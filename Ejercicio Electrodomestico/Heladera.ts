import { Electrodomestico } from "./Electrodomestico";

export class Heladera extends Electrodomestico{

    protected temperatura:number;

    constructor(pMarca:string,pModelo:string,pTemperatura:number){
     
        super(pMarca,pModelo)
        this.temperatura = pTemperatura;

    }

    public setTemperatura(pTemperatura:number):void{
        this.temperatura = pTemperatura;
    }
}
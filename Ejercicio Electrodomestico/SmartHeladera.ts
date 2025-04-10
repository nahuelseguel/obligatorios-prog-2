import { Heladera } from "./Heladera";
import { ModuloWifi } from "./ModuloWifi";

export class SmartHeladera extends Heladera{

    protected conexion:ModuloWifi;
    protected red:string;

    constructor(pMarca:string,pModelo:string,pTemperatura:number,pConexion:ModuloWifi,pRed:string){

        super(pMarca,pModelo,pTemperatura);
        
        this.conexion = pConexion;
        this.red = pRed;

    }

    public getConexion():ModuloWifi{
        return this.conexion;
    }

    public getRed():string{
        return this.red;
    }

    public conectarInternet(pRed:string):void{
        this.red = pRed;
        console.log(`Se conecto a la red: ${pRed}`);
        
    }

    public getInfo():string{
        return `Info base: ${this.getInfoElectrodomestico}
                Temperatura: ${this.temperatura}
                Conexion a internet: ${this.conexion}\n${this.conectarInternet}`
    }

}
import { Persona } from "./Persona";

export class Alumno extends Persona{

    protected nota:number;

    constructor(pNombre:string,pApellido:string,pFechaDeNacimiento:string,pDNI:number,pNota:number){
        
        super(pNombre,pApellido,pFechaDeNacimiento,pDNI);

        this.nota = pNota;

    }

    public setNota(pNota:number):void{
        this.nota = pNota;
    }

    public getNota():number{
        return this.nota
    }

    public getInfo():void{
        super.getInfo();
        console.log(
            `Nota: ${this.nota}`
            ) 
    }
}
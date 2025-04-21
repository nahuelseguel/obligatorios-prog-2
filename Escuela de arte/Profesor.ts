import { Persona } from "./Persona";

export class Profesor extends Persona{

    protected salario:number;

    constructor(pNombre:string,pApellido:string,pFechaDeNacimiento:string,pDNI:number,pSalario:number){
        
        super(pNombre,pApellido,pFechaDeNacimiento,pDNI);

        this.salario = pSalario;
    }

    public setSalario(pSalario:number):void{
        this.salario = pSalario;
    }

    public getSalario():number{
        return this.salario;
    }

    public getInfoProfesor():void{
        super.getInfo();
        console.log(`Salario: ${this.salario}.`);
    }

   
}
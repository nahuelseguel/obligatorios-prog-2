import { Alumno } from "./Alumno";

export class Persona{

    protected nombre:string;
    protected apellido:string;
    protected fechaDeNacimiento:string;
    protected DNI:number;

    constructor(pNombre:string,pApellido:string,pFechaDeNacimiento:string,pDNI:number){
        
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.fechaDeNacimiento = pFechaDeNacimiento;
        this.DNI = pDNI;

    }

    public setNombre(pNombre:string):void{        
        this.nombre = pNombre;
    }
    
    public setApellido(pApellido:string):void{        
        this.apellido = pApellido;
    }

    public setFechaDeNacimiento(pFechaDeNacimiento:string):void{        
        this.fechaDeNacimiento = pFechaDeNacimiento;
    }

    public setDNI(pDNI:number):void{        
        this.DNI = pDNI;
    }

    public getNombre():string{        
        return this.nombre;
    }

    public getApellido():string{        
        return this.apellido;
    }

    public getFechaDeNacimiento():string{        
        return this.fechaDeNacimiento;
    }

    public getDNI():number{        
        return this.DNI;
    } 

    public getInfo():void{

        console.log(
            `Nombre: ${this.nombre}.\n
            Apellido: ${this.apellido}.\n
            Fecha de nacimiento: ${this.fechaDeNacimiento}.\n
            DNI: ${this.DNI}.`
            ) 
    }

}
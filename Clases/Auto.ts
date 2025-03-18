// Actividad OBLIGATORIA ENTREGABLE (fecha maxima de entrega miercoles 19 de marzo).

// Crear una clase Auto con atributos (marca, modelo, anio).
// Agregar métodos (constructor(), acelerar(), frenar()).
// Instanciar objetos y probar métodos.

export class Auto {
    marca : string;
    modelo : string;
    año : number;
    estaEnciendido : boolean = false;
    estaEstacionado : boolean = false;
    estaEnMoviemiento : boolean = false;
    
    
    constructor(pMarca:string,pModelo:string,pAño:number){
        
        this.marca = pMarca;
        this.modelo = pModelo;
        this.año = pAño;

    }

    encenderApagar(estaEnciendido:boolean):void{
        if(this.estaEnciendido){
            this.estaEnciendido = true;
        }
    }

    acelerar():void{
        if(!this.estaEnciendido && !this.estaEstacionado){
            console.log("Acelerar");
            this.estaEnMoviemiento = true;
        }
    }

    frenar():void{
        if(this.estaEnMoviemiento){
            this.estaEnMoviemiento = false;
            console.log("frenar");
        }
    }

}

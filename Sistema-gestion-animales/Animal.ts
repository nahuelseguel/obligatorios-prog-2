import { IAnimal } from "./IAnimal";

export abstract class Animal implements IAnimal{

    protected nombre:string;

    constructor(pNombre:string){

        this.nombre = pNombre;

    }

    public setNombre(pNombre:string):void{
        this.nombre = pNombre;
    }

    public moverse():void{
        console.log(`${this.nombre} se mueve...`);
    }

    public emitirSpnido(): void {
        console.log(`${this.nombre} esta emitiendo sonido.`)
    }

    abstract tipoDeDieta():void;

}
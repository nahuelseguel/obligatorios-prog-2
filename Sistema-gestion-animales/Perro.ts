import { Animal } from "./Animal";

export class Perro extends Animal{

    protected dieta:string;

    constructor(pNombre:string){

        super(pNombre);
        this.dieta = "Carne, Alimento, Agua";

    }

    public tipoDeDieta(): void {
        console.log(`${this.dieta} es la dieta diaria de ${this.nombre}.`)
    }

    public emitirSpnido(): void {
        console.log(`${this.nombre} ¡Guau!`)
    }
}
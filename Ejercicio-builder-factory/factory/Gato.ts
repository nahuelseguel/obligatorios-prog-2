import { IAnimal } from "./IAnimal";

export class Gato implements IAnimal{

    private maullido:string;
    private saltar:string;

    constructor(){

        this.maullido = "¡Miau!";
        this.saltar = "Saltando";
    }

    hacerSonido(): void {
        console.log(`El gato dice: ${this.maullido}`);
    }

    mover(): void {
        console.log(`El gato esta ${this.saltar}`);
    }
}
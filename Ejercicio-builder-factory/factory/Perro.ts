import { IAnimal } from "./IAnimal";

export class Perro implements IAnimal{

    private ladrido:string;
    private correr:string;

    constructor(){

        this.ladrido = "¡Guau!";
        this.correr = "Corriendo";
    }

    hacerSonido(): void {
        console.log(`El perro dice: ${this.ladrido}`);
    }

    mover(): void {
        console.log(`El perro esta ${this.correr}`);
    }
}
import { IAnimal } from "./IAnimal";

export class Pajaro implements IAnimal{

    private silvar:string;
    private volar:string;

    constructor(){

        this.silvar = "Silvido";
        this.volar = "Volando";
    }

    hacerSonido(): void {
        console.log(`El pajaro dice: ${this.silvar}`);
    }

    mover(): void {
        console.log(`El pajaro esta ${this.volar}`);
    }
}
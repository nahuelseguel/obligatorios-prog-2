import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Pajaro } from "./Pajaro";
import { IAnimal } from "./IAnimal";

export class FabricaAnimal{
    public crearAnimal(tipo:string):IAnimal{
        if(tipo === "perro"){
            return new Perro();
        }else if (tipo === "gato"){
            return new Gato();
        }else if (tipo === "pajaro"){
            return new Pajaro();
        }else{
            throw new Error("No esta dentro de los animales estipulados.");
        }
    }
}
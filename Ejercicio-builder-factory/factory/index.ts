import { FabricaAnimal } from "./FabricarAnimal";

let fabrica = new FabricaAnimal();

let perro = fabrica.crearAnimal("perro");

let gato = fabrica.crearAnimal("gato");

let pajaro = fabrica.crearAnimal("pajaro");

perro.hacerSonido();
perro.mover();

console.log("\n------------------------------------------\n")

gato.hacerSonido();
gato.mover();

console.log("\n------------------------------------------\n")

pajaro.hacerSonido();
pajaro.mover();

console.log("\n------------------------------------------\n")

try{
    let tigre = fabrica.crearAnimal("Tigre");
    console.log(tigre);
}catch(error){
    console.log(error.name + " " + error.message);
}
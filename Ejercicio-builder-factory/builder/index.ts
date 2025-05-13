   import { Computadora } from "./Computadora";
   import { ComputadoraBuilder } from "./computadoraBuilder";
   
   let computadoraMedia = new Computadora("Ryzen 3 3200G",16,"1tb","AMD rx 580","Windows");

    let computadoraGamer = new ComputadoraBuilder().setRam(32).setAlmacenamiento("1.5tb").setSistemaOperativo("Windows").build();

    console.log(`Pc Media: ${computadoraMedia.toString()}`);

    console.log("----------------------------------------------------------")

    console.log(`Pc Gamer: ${computadoraGamer.toString()}`);
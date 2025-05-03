import { Perro } from "./Perro";
import { Gato } from "./Gato";

let perro:Perro = new Perro(`Dog`);
let gato:Gato = new Gato(`Cat`);

perro.emitirSpnido();
perro.moverse();
perro.tipoDeDieta();

console.log(`\n`);

gato.emitirSpnido();
gato.moverse();
gato.tipoDeDieta();
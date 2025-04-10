import { ModuloWifi } from "./ModuloWifi";
import { SmartHeladera } from "./SmartHeladera";

let modulo:ModuloWifi = new ModuloWifi(300,20)
let smartH:SmartHeladera = new SmartHeladera("Sanyo","2025",10,modulo,"Domestica");

console.log(smartH);


smartH.Encender();
smartH.setMarca("Philco");
smartH.setModelo("2024");
smartH.setTemperatura(0);
smartH.conectarInternet("Publica");
modulo.setVelocidadMbps(500);
modulo.setFrecuenciaGHz(30);

console.log(smartH);


smartH.apagar();

console.log(smartH);
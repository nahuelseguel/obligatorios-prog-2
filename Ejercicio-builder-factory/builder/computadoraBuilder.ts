// Hice el builder en un archivo a parte porque considere que se pueden construir muchas variantes de la computadora, por lo que no serviria crear una sola. Tampoco hice un index ya que hice los dos ejercicios en una misma carpeta y para que no quede confuso decidi dejar el funcionamiento en cada uno.

import { Computadora } from "./Computadora";

export  class ComputadoraBuilder{

    protected ram:number = 16;
    protected almacenamiento: string = "1tb";
    protected sistemaOperativo: string = "Linux";


    public setRam(pRam:number):ComputadoraBuilder{
        this.ram = pRam;
        return this;
    }

    public setAlmacenamiento(pAlmacenamiento:string):ComputadoraBuilder{
        this.almacenamiento = pAlmacenamiento;
        return this;
    }

    public setSistemaOperativo(pSistemaOperativo:string):ComputadoraBuilder{
        this.sistemaOperativo = pSistemaOperativo;
        return this;
    }

    public build():Computadora{
        return new Computadora("ryzen 5 5600G",this.ram,this.almacenamiento,"Geforce RTX 3050 8gb",this.sistemaOperativo);
    }

}


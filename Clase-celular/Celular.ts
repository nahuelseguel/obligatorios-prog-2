// Se debe crear una clase Celular que represente un teléfono móvil.
// Requisitos:
// Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
// Constructor con parámetros opcionales y obligatorios:
// Obligatorios: Marca, modelo y sistema operativo.
// Opcionales: Memoria RAM (por defecto 4GB), almacenamiento interno (por defecto 64GB) y estado de encendido (por defecto apagado).
// Métodos adicionales:
// encenderApagar(): Cambia el estado de encendido/apagado del celular.
// mostrarInfo(): Retorna una cadena con los datos del celular.

export class Celular{
    private marca:string;
    private modelo:string;
    private sistemaOperativo:string;
    private memoriaRam:string;
    private almacenamientoInterno:string;
    private encendido:boolean;

    constructor (pMarca:string,pModelo:string,pSistemaOperativo:string,pMemoriaRam?:string,pAlmacenamientoInterno?:string,pEncendido?:boolean){
        this.marca = pMarca;
        this.modelo = pModelo;
        this.sistemaOperativo = pSistemaOperativo;
        this.memoriaRam = pMemoriaRam ?? "4GB";
        this.almacenamientoInterno = pAlmacenamientoInterno ?? "64GB";
        this.encendido = pEncendido ?? false;
    }

    public setMarca(pMarca:string):void{
        this.marca = pMarca;
    }

    public setModelo(pModelo:string):void{
        this.modelo = pModelo;
    }

    public setSistemaOperativo(pSistemaOperativo:string):void{
        this.sistemaOperativo = pSistemaOperativo;
    }

    public setMemoriaRam(pMemoriaRam:string):void{
        this.memoriaRam = pMemoriaRam;
    }

    public setAlmacenamiento(pMarca:string):void{
        this.marca = pMarca;
    }

    public setEncendido(pEncendido:boolean):void{
        this.encendido = pEncendido;
    }



    public getMarca():string{
       return this.marca;
    }

    public getModelo():string{
       return this.modelo;
    }

    public getSistemaOperativo():string{
       return this.sistemaOperativo;
    }

    public getMemoriaRam():string{
       return this.memoriaRam;
    }

    public getAlmacenamiento():string{
        return this.marca;
    }

    public getEncendido():boolean{
        return this.encendido;
    }



    public encenderApagar():void{
        if(!this.encendido){
            this.encendido = true;
        }else{
            this.encendido = false;
        }
    }

    public mostrarDatos():string{
        return `Marca: ${this.marca}.
                Modelo: ${this.modelo}.
                Sistema operativo: ${this.sistemaOperativo}.
                Memoria RAM: ${this.memoriaRam}.
                Almacenamiento: ${this.almacenamientoInterno}.
                Esta encendido: ${this.encendido}.`;
    }
}
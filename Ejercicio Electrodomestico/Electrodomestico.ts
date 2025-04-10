export class Electrodomestico {

    protected marca:string;
    protected modelo:string;
    protected estaEncendido:boolean;

    constructor(pMarca:string,pModelo:string){

        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaEncendido = false;

    }

    public setMarca(pMarca:string):void{
        this.marca = pMarca;
    }

    public getMarca():string{
        return this.marca; 
    }

    public setModelo(pModelo:string){
        this.modelo = pModelo;
    }

    public getModelo():string{
        return this.modelo;
    }

    public Encender():void{
        if(!this.estaEncendido){
            this.estaEncendido = true;
        }
    }
    public apagar():void{
        if(this.estaEncendido){
            this.estaEncendido = false;
        }
    }
    
    public getInfoElectrodomestico():string{
        return `Marca: ${this.marca}
                Modelo: ${this.modelo}
                Encendido: ${this.estaEncendido}`
    }
}
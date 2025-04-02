export class Alumno{

    private nombre:string;
    private apellido:string;
    private curso:string;
    private nota:number;

    constructor (pNombre:string,pApellido:string,pCurso:string,pNota:number){

        this.nombre = pNombre;
        this.apellido = pApellido;
        this.curso = pCurso;
        this.nota = pNota;

    }

    public setNombre(pNombre:string):void {
        this.nombre = pNombre;
    }

    public setApellido(pApellido:string):void {
        this.apellido = pApellido;
    }

    public setCurso(pCurso:string):void {
        this.curso = pCurso;
    }

    public setNota(pNota:number):void {
        this.nota = pNota;
    }


    public getNombre():string {
        return this.nombre;
    }

    public getApellido():string {
        return this.apellido;
    }

    public getCurso():string {
        return this.curso;
    }

    public getNota():number {
        return this.nota;
    }



    public getInfoAlumno():string {
        return `Nombre del alumno: ${this.nombre}.
                     Apellido: ${this.apellido}.
                     Curso: ${this.curso}.
                     Nota: ${this.nota}.
                     Esta aprobado: ${this.estaAprobado()? "Si." : "No."}`;
    }

    public estaAprobado():boolean{
        return this.nota > 7;
    }
}
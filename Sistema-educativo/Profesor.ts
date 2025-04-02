import { Alumno } from "./Alumno";

export class Profesor {

    private nombre:string;
    private apellido:string;
    private materia:string;
    private alumno:Alumno[];

    constructor(pNombre:string,pApellido:string,pMateria:string,pAlumnos:Alumno[]){

        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;

    }

    public setNombre(pNombre:string):void{
        this.nombre = pNombre;
    }

    public setApellido(pApellido:string):void{
        this.apellido = pApellido;
    }

    public setMateria(pMateria:string):void{
        this.materia = pMateria;
    }


    public getNombre():string{
        return this.nombre;
    }

    public getApellido():string{
        return this.apellido;
    }

    public getMateria():string{
        return this.materia;
    }

    //Funcion creada en Escuela, pero, se podria utilizar aca. 
    // public matricular(pAlumnos:Alumno){
    //     this.alumnos.push(pAlumnos);
    // }

    public getInfoProfe():string{
        let alumnos:string = ``;
        this.alumno.forEach(alumno => {
            alumnos += `${alumno.getNombre()}\n`
        })
        return `Nombre del profesor: ${this.nombre}.
                Apellido: ${this.apellido}.
                Materia: ${this.materia}
                Alumno: \n${alumnos}`
    }
}
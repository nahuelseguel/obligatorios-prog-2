import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Escuela{
    private nombre:string;
    private profesores:Profesor[];
    private alumnos:Alumno[];

    constructor(pNombre:string,pProfesores:Profesor[]){

        this.nombre = pNombre;
    }

    public setNombre(pNombre:string):void{
        this.nombre = pNombre;
    }

    public getNombre():string{
        return this.nombre;
    }

    public matricular(pAlumnos:Alumno){
        this.alumnos.push(pAlumnos);
    }

    public contratar(pProfesores:Profesor){
        this.profesores.push(pProfesores)
    }

    public expulsarAlumno(pAlumnos:Alumno):void{
        // ubicar posicion de alumno dentro del arreglo, esa posicion se le pasa al slice
        let i:number = this.alumnos.indexOf(pAlumnos);
        if(i == -1){
            console.log("El nombre del alumno es incorrecto o el alumno no se encuentra en la planilla");
        }

        
        this.alumnos.slice(i, 1);
    }

    public despedirProf(pProfesor:Profesor):void{
        
        let i:number = this.profesores.indexOf(pProfesor);
        if(i == -1){
            console.log("El nombre del profesor es incorrecto o el profesor no se encuentra en la planilla");
        }
        
        this.profesores.slice(i, 1);
    }
}


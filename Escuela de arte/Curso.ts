import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";

export class Curso{

    protected nombre:string;
    protected duracionSemanas:number;
    protected fechaInicio:string;
    protected profesorResponsable:Profesor;
    protected alumnos:Alumno[];

    constructor(pNombre:string,pDuracionSemanas:number,pFechaInicio:string,pProfesorResponsable:Profesor){

        this.nombre = pNombre;
        this.duracionSemanas = pDuracionSemanas;
        this.fechaInicio = pFechaInicio;
        this.profesorResponsable = pProfesorResponsable;
        this.alumnos = new Array();

    }

    public setNombre(pNombre:string):void{        
        this.nombre = pNombre;
    }

    public setDuracionSemanas(pDuracionSemanas:number):void{        
        this.duracionSemanas = pDuracionSemanas;
    }

    public setFechaInicio(pFechaInicio:string):void{        
        this.fechaInicio = pFechaInicio;
    }

    public setProfesorResponsable(pProfesorResponsable:Profesor):void{        
        this.profesorResponsable = pProfesorResponsable;
    }

    public getNombre():string{        
        return this.nombre;
    }

    public getDuracionSemanas():number{        
        return this.duracionSemanas;
    }

    public getFechaInicio():string{        
        return this.fechaInicio;
    }

    public getProfesorResponsable():Profesor{        
        return this.profesorResponsable;
    }

    public getAlumnos():Alumno[]{        
        return this.alumnos;
    }

    public agregarAlumnos(pAlumno:Alumno){
        this.alumnos.push(pAlumno);
    }

    public getInfoCurso():void{
        
        console.log(
            `Nombre de curso: ${this.nombre}.\n
            Duracion del curso: ${this.duracionSemanas}.\n
            Fecha de inicio: ${this.fechaInicio}.\n
            Profesor responsable: ${this.profesorResponsable.getNombre()} ${this.profesorResponsable.getApellido()}.
            Alumnos: `
            ) 
            this.alumnos.forEach(alumno => alumno.getInfo());
    }
}
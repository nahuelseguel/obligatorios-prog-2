import { Alumno } from "./Alumno";
import { Curso } from "./Curso";
import { Profesor } from "./Profesor";

export class Escuela{

    protected nombre:string;
    protected cursos:Curso[];
    protected alumnos:Alumno[];
    protected profesor:Profesor[];

    constructor(pNombre:string){
        
        this.nombre = pNombre;
        this.cursos = new Array();
        this.alumnos = new Array();
        this.profesor = new Array();
        
    }

    public setNombre(pNombre:string):void{
        this.nombre = pNombre;
    }

    public setCursos(pCursos:Curso[]){
        this.cursos = pCursos;
    }

    public getNombre():string{
        return this.nombre
    }

    public getCursos():Curso[]{
        return this.cursos;
    }

    public agregarAlumnos(pAlumno:Alumno){
        this.alumnos.push(pAlumno);
    }

    public agregarProfesor(pProfesor:Profesor){
        this.profesor.push(pProfesor);
    }

    public agregarCurso(pCurso:Curso){
        this.cursos.push(pCurso);
    }

    public eliminarCurso(pCurso:Curso){
        let i:number = this.cursos.indexOf(pCurso);
        
            if(i != -1){
                this.cursos.splice(i, 1);
            }else{
                console.log("El curso no existe")
            }
        
    }

    public getInfoEscuela():void{
        console.log(`Nombre de Institucion: ${this.nombre}.\n
            Cursos: `
        )
        this.cursos.forEach(curso => curso.getInfoCurso());
    }

}
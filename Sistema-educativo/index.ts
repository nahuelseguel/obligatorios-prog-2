import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";
import { Escuela } from "./Escuela";

let alumno1:Alumno = new Alumno("Pepe","Grillo","1ro",6);
let alumno2:Alumno = new Alumno("Papo","Napolitano","3ro",10);
let alumno3:Alumno = new Alumno("Pipo","Gorosito","2ro",5);
let alumno4:Alumno = new Alumno("Papu","Gomez","5to",8);
let alumno5:Alumno = new Alumno("Pupi","Zanetti","6to",10);

let alumno6:Alumno = new Alumno("Gromash","Hellscream","4to",9);
let alumno7:Alumno = new Alumno("Thrall","go´el","6to",10);
let alumno8:Alumno = new Alumno("Orgrimm","DoomHammer","5to",4);
let alumno9:Alumno = new Alumno("Sylvanas","Windrunner","3ro",3);
let alumno10:Alumno = new Alumno("Varian","Wrynn","1ro",10);

let profesor1:Profesor = new Profesor("Juanjo","Se","Economia",[alumno1,alumno2,alumno3,alumno4,alumno5]);
let profesor2:Profesor = new Profesor("Marcia","No","Literatura",[alumno6,alumno7,alumno8,alumno9,alumno10]);

let escuela:Escuela = new Escuela("Tres Arroyos",[profesor1])

escuela.matricular(alumno1);
escuela.matricular(alumno2);
escuela.matricular(alumno3);
escuela.matricular(alumno4);
escuela.matricular(alumno5);
escuela.matricular(alumno6);
escuela.matricular(alumno7);
escuela.matricular(alumno8);
escuela.matricular(alumno9);
escuela.matricular(alumno10);

escuela.contratar(profesor1);
escuela.contratar(profesor2);

escuela.expulsarAlumno(alumno1);

escuela.despedirProf(profesor1);

console.log(alumno1.getInfoAlumno());


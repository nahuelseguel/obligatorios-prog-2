import { Alumno } from "./Alumno";
import { Curso } from "./Curso";
import { Escuela } from "./Escuela";
import { Profesor } from "./Profesor";

let escuela:Escuela = new Escuela("Arte");

let profMusica:Profesor = new Profesor("Dimebag","Darrel","20/08/1966",11111111,300000);
escuela.agregarProfesor(profMusica);
let curso1:Curso = new Curso("Musica",24,"5/03",profMusica);
escuela.agregarCurso(curso1);

let profPintura:Profesor = new Profesor("Francisco","de Goya","1819",11111111,200000);
escuela.agregarProfesor(profPintura);
let curso2:Curso = new Curso("Pintura",24,"5/03",profPintura);
escuela.agregarCurso(curso2);

let profLiteratura:Profesor = new Profesor("Howard Phillips","Lovecraft","20/08/1890",11111111,300000);
escuela.agregarProfesor(profLiteratura);
let curso3:Curso = new Curso("Literatura",24,"5/03",profLiteratura);
escuela.agregarCurso(curso3);

let alumno1:Alumno = new Alumno("Joey","Jordison","26/04/1975",11111111,10);
let alumno2:Alumno = new Alumno("Will","Ramos","31/05/994",11111111,10);
escuela.agregarAlumnos(alumno1);
escuela.agregarAlumnos(alumno2);
curso1.agregarAlumnos(alumno1);
curso1.agregarAlumnos(alumno2);
curso1.setProfesorResponsable(profMusica);

let alumno3:Alumno = new Alumno("Paul","Cézanne ","!901",11111111,9);
let alumno4:Alumno = new Alumno("William","Adolphe Bouguereau","1850",11111111,8);
escuela.agregarAlumnos(alumno3);
escuela.agregarAlumnos(alumno4);
curso2.agregarAlumnos(alumno3);
curso2.agregarAlumnos(alumno4);
curso2.setProfesorResponsable(profPintura);

let alumno5:Alumno = new Alumno("Clive","Barker","05/10/1952",11111111,10);
let alumno6:Alumno = new Alumno("Stephen","King","21/09/1947",11111111,10);
escuela.agregarAlumnos(alumno5);
escuela.agregarAlumnos(alumno6);
curso3.agregarAlumnos(alumno5);
curso3.agregarAlumnos(alumno6);
curso3.setProfesorResponsable(profLiteratura);

escuela.getInfoEscuela();
profMusica.getInfoProfesor();
profPintura.getInfoProfesor();
profLiteratura.getInfoProfesor();

escuela.eliminarCurso(curso2);
profPintura.setSalario(100000);
alumno5.setNota(8);
profPintura.getInfoProfesor();

escuela.getInfoEscuela();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(pNombre, pProfesores) {
        this.nombre = pNombre;
    }
    Escuela.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Escuela.prototype.getNombre = function () {
        return this.nombre;
    };
    Escuela.prototype.matricular = function (pAlumnos) {
        this.alumnos.push(pAlumnos);
    };
    Escuela.prototype.contratar = function (pProfesores) {
        this.profesores.push(pProfesores);
    };
    Escuela.prototype.expulsarAlumno = function (pAlumnos) {
        // ubicar posicion de alumno dentro del arreglo, esa posicion se le pasa al slice
        var i = this.alumnos.indexOf(pAlumnos);
        if (i != -1) {
            console.log("El nombre del alumno es incorrecto o el alumno no se encuentra en la planilla");
        }
        this.alumnos.slice(i, 1);
    };
    Escuela.prototype.despedirProf = function (pProfesor) {
        var i = this.profesores.indexOf(pProfesor);
        if (i != -1) {
            console.log("El nombre del profesor es incorrecto o el profesor no se encuentra en la planilla");
        }
        this.profesores.slice(i, 1);
    };
    return Escuela;
}());
exports.Escuela = Escuela;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(pNombre, pDuracionSemanas, pFechaInicio, pProfesorResponsable) {
        this.nombre = pNombre;
        this.duracionSemanas = pDuracionSemanas;
        this.fechaInicio = pFechaInicio;
        this.profesorResponsable = pProfesorResponsable;
        this.alumnos = new Array();
    }
    Curso.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Curso.prototype.setDuracionSemanas = function (pDuracionSemanas) {
        this.duracionSemanas = pDuracionSemanas;
    };
    Curso.prototype.setFechaInicio = function (pFechaInicio) {
        this.fechaInicio = pFechaInicio;
    };
    Curso.prototype.setProfesorResponsable = function (pProfesorResponsable) {
        this.profesorResponsable = pProfesorResponsable;
    };
    Curso.prototype.getNombre = function () {
        return this.nombre;
    };
    Curso.prototype.getDuracionSemanas = function () {
        return this.duracionSemanas;
    };
    Curso.prototype.getFechaInicio = function () {
        return this.fechaInicio;
    };
    Curso.prototype.getProfesorResponsable = function () {
        return this.profesorResponsable;
    };
    Curso.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    Curso.prototype.agregarAlumnos = function (pAlumno) {
        this.alumnos.push(pAlumno);
    };
    Curso.prototype.getInfoCurso = function () {
        console.log("Nombre de curso: ".concat(this.nombre, ".\n\n            Duracion del curso: ").concat(this.duracionSemanas, ".\n\n            Fecha de inicio: ").concat(this.fechaInicio, ".\n\n            Profesor responsable: ").concat(this.profesorResponsable.getNombre(), " ").concat(this.profesorResponsable.getApellido(), ".\n            Alumnos: "));
        this.alumnos.forEach(function (alumno) { return alumno.getInfo(); });
    };
    return Curso;
}());
exports.Curso = Curso;

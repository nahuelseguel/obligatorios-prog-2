"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(pNombre, pApellido, pCurso, pMateria, pNota) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.curso = pCurso;
        this.materia = pMateria;
        this.nota = pNota;
    }
    Alumno.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Alumno.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Alumno.prototype.setCurso = function (pCurso) {
        this.curso = pCurso;
    };
    Alumno.prototype.setMateria = function (pMateria) {
        this.materia = pMateria;
    };
    Alumno.prototype.setNota = function (pNota) {
        this.nota = pNota;
    };
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumno.prototype.getCurso = function () {
        return this.curso;
    };
    Alumno.prototype.getMateria = function () {
        return this.materia;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.getInfoAlumno = function () {
        return "Nombre del alumno: ".concat(this.nombre, ".\n                     Apellido: ").concat(this.apellido, ".\n                     Curso: ").concat(this.curso, ".\n                     Nota: ").concat(this.nota, ".\n                     Esta aprobado: ").concat(this.estaAprobado() ? "Si" : "No");
    };
    Alumno.prototype.estaAprobado = function () {
        return this.nota > 7;
    };
    return Alumno;
}());
exports.Alumno = Alumno;

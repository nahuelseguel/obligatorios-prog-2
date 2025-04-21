"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(pNombre) {
        this.nombre = pNombre;
        this.cursos = new Array();
        this.alumnos = new Array();
        this.profesor = new Array();
    }
    Escuela.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Escuela.prototype.setCursos = function (pCursos) {
        this.cursos = pCursos;
    };
    Escuela.prototype.getNombre = function () {
        return this.nombre;
    };
    Escuela.prototype.getCursos = function () {
        return this.cursos;
    };
    Escuela.prototype.agregarAlumnos = function (pAlumno) {
        this.alumnos.push(pAlumno);
    };
    Escuela.prototype.agregarProfesor = function (pProfesor) {
        this.profesor.push(pProfesor);
    };
    Escuela.prototype.agregarCurso = function (pCurso) {
        this.cursos.push(pCurso);
    };
    Escuela.prototype.eliminarCurso = function (pCurso) {
        var i = this.cursos.indexOf(pCurso);
        if (i != -1) {
            this.cursos.splice(i, 1);
        }
        else {
            console.log("El curso no existe");
        }
    };
    Escuela.prototype.getInfoEscuela = function () {
        console.log("Nombre de Institucion: ".concat(this.nombre, ".\n\n            Cursos: "));
        this.cursos.forEach(function (curso) { return curso.getInfoCurso(); });
    };
    return Escuela;
}());
exports.Escuela = Escuela;

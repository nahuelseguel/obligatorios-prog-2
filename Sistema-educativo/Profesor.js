"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(pNombre, pApellido, pMateria, pAlumnos) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.materia = pMateria;
    }
    Profesor.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Profesor.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Profesor.prototype.setMateria = function (pMateria) {
        this.materia = pMateria;
    };
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.getApellido = function () {
        return this.apellido;
    };
    Profesor.prototype.getMateria = function () {
        return this.materia;
    };
    //Funcion creada en Escuela, pero, se podria utilizar aca. 
    // public matricular(pAlumnos:Alumno){
    //     this.alumnos.push(pAlumnos);
    // }
    Profesor.prototype.getInfoProfe = function () {
        var alumnos = "";
        this.alumno.forEach(function (alumno) {
            alumnos += "".concat(alumno.getNombre(), "\n");
        });
        return "Nombre del profesor: ".concat(this.nombre, ".\n                Apellido: ").concat(this.apellido, ".\n                Materia: ").concat(this.materia, "\n                Alumno: \n").concat(alumnos);
    };
    return Profesor;
}());
exports.Profesor = Profesor;

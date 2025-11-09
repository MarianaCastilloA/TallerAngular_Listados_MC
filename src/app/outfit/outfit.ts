export class Outfit {
    id: number;
    nombre: string;
    descripcion: string;
    armarioId: number;
    clima: string;
    edad: string;
    asesor: string;
    usuario: string;
    colecciones: string[];
    prendas: number[]; // IDs of Prenda
    
    constructor(id: number, nombre: string, descripcion: string, armarioId: number, clima: string, edad: string, asesor: string, usuario: string, colecciones: string[] = [], prendas: number[] = []) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.armarioId = armarioId;
        this.clima = clima;
        this.edad = edad;
        this.asesor = asesor;
        this.usuario = usuario;
        this.colecciones = colecciones;
        this.prendas = prendas;
    }
}

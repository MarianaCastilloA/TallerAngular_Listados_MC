import { Prenda } from '../prenda/prenda';
import { Outfit } from '../outfit/outfit';

export class Armario {
    id: number;
    nombreArmario: string
    descripcion: string;
    fechaCreacion: Date;
    prendas: Prenda[]; //cambiar a tipo prenda cuando se tenga la clase prenda
    outfits: Outfit[]; //cambiar a tipo outfit cuando se tenga la clase outfit

    public constructor(id: number, nombreArmario: string, descripcion: string, fechaCreacion: Date, prendas: Prenda[] = [], outfits: Outfit[] = []) {
        this.id = id;
        this.nombreArmario = nombreArmario;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.prendas = prendas;
        this.outfits = outfits;
    }
}

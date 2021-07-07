import { ObjectUtil } from "@util";
import { Classe } from "./classe";
import { Estudante } from "./estudante";
import { Serie } from "./serie";

export class EstudanteFiltro{
    public serieId?:number;
    public classeId?: number;
    public id?: number;

    constructor(referenciaDoFormularioNaPagina: Partial<Estudante>) {
        if (referenciaDoFormularioNaPagina) {
            this.id = ObjectUtil.buscarValor(referenciaDoFormularioNaPagina, 'id');
            if (referenciaDoFormularioNaPagina.hasOwnProperty('serie') && typeof referenciaDoFormularioNaPagina == 'object')
                this.serieId = ObjectUtil.buscarValor(referenciaDoFormularioNaPagina, 'serie.id');

            if (referenciaDoFormularioNaPagina.hasOwnProperty('classe') && typeof referenciaDoFormularioNaPagina == 'object')
                this.classeId = ObjectUtil.buscarValor(referenciaDoFormularioNaPagina, 'classe.id');
        }
    }
}